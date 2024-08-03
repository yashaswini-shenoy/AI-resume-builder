import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormSection from "../../components/FormSection";
import ResumePreview from "../../components/ResumePreview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import dummy from "@/data/dummy";
import GlobalApi from "./../../../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";

function EditResume() {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) GetResumeInfo();
  }, [user]);

  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(
      resumeId,
      user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      if (!resp?.data?.data?.length) navigate("/dashboard");
      setResumeInfo(resp.data.data[0].attributes);
    });
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section  */}
        <FormSection />
        {/* Preview Section  */}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
