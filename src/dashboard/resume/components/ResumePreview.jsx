import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import SummeryPreview from "./preview/SummeryPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";
import DraggableComponent from "@/components/custom/dragabble/DraggableComponent";
import { useLocation, useParams } from "react-router-dom";
import GlobalApi from "../../../../service/GlobalApi";

const LOCAL_STORAGE_KEY = "draggableComponentPositions";

function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [positions, setPositions] = useState({});
  const [isDisabled, setDisabled] = useState(false);
  const { resumeId } = useParams();

  useEffect(() => {
    setDisabled(
      window.location.href?.slice(
        window.location.href?.lastIndexOf("/"),
        window.location.href?.length
      ) !== "/edit"
    );

    // Load positions from local storage on mount
    const savedPositions = resumeInfo?.sectionPositions;
    //   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    setPositions(savedPositions);
  }, [resumeInfo]);

  const handlePositionChange = (id, position) => {
    const newPositions = { ...positions, [id]: position };

    setPositions(newPositions["a"]);
    setResumeInfo({ ...resumeInfo, sectionPositions: newPositions });
    const data = {
      data: {
        sectionPositions: newPositions,
      },
    };
    GlobalApi.UpdateResumeDetail(resumeId, data).then((resp) => {
      toast("Theme Color Updated");
    });
  };

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
        width: "100%",
        maxWidth: "595px",
        aspectRatio: 0.707,
        position: "relative", // Ensures draggable bounds are set correctly
      }}
    >
      {/* Personal Detail */}
      <DraggableComponent
        initialPosition={positions ? positions["a"] : undefined}
        onPositionChange={(position) => handlePositionChange("a", position)}
        isDisabled={isDisabled}
      >
        <PersonalDetailPreview resumeInfo={resumeInfo} />
      </DraggableComponent>
      {/* Summery */}
      <DraggableComponent
        initialPosition={positions && positions["b"]}
        onPositionChange={(position) => handlePositionChange("b", position)}
        isDisabled={isDisabled}
      >
        <SummeryPreview resumeInfo={resumeInfo} />
      </DraggableComponent>
      {/* Professional Experience */}
      {resumeInfo?.Experience?.length > 0 && (
        <DraggableComponent
          initialPosition={positions && positions["c"]}
          onPositionChange={(position) => handlePositionChange("c", position)}
          isDisabled={isDisabled}
        >
          <ExperiencePreview resumeInfo={resumeInfo} />
        </DraggableComponent>
      )}
      {/* Educational */}
      {resumeInfo?.education?.length > 0 && (
        <DraggableComponent
          initialPosition={positions && positions["d"]}
          onPositionChange={(position) => handlePositionChange("d", position)}
          isDisabled={isDisabled}
        >
          <EducationalPreview resumeInfo={resumeInfo} />
        </DraggableComponent>
      )}
      {/* Skills */}
      {resumeInfo?.skills?.length > 0 && (
        <DraggableComponent
          initialPosition={positions && positions["e"]}
          onPositionChange={(position) => handlePositionChange("e", position)}
          isDisabled={isDisabled}
        >
          <SkillsPreview resumeInfo={resumeInfo} />
        </DraggableComponent>
      )}
      {/* Debugging Output */}
    </div>
  );
}

export default ResumePreview;
