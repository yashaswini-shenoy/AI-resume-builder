import { useEffect, useState } from "react";
import GlobalApi from "../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { RWebShare } from "react-web-share";
import ResumePreview from "@/dashboard/resume/components/ResumePreview";

const PublicView = () => {
  const { uuid } = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  const getResumeByDocumentId = () => {
    GlobalApi.getByUUID(uuid)
      .then((response) => {
        setResumeInfo(
          response?.data?.data?.length > 0
            ? response?.data?.data[0].attributes
            : undefined
        );
      })
      .catch(() => {});
  };

  const HandleDownload = () => {
    window.print();
  };

  useEffect(() => {
    getResumeByDocumentId();
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print">
        <Header />

        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <div className="flex justify-between px-44 my-10">
            <Button onClick={HandleDownload}>Download</Button>

            <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open url to see it",
                url: window.url,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button>Share</Button>
            </RWebShare>
          </div>
        </div>
      </div>
      <div className="my-10 mx-10 md:mx-20 lg:mx-36">
        <div id="print-area">
          <ResumePreview />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default PublicView;
