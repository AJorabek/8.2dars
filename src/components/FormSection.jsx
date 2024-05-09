import { Box } from "@mui/material";
import Row from "./Row";
import FooterSection from "./FooterSection";

const FormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const projectName = data.get("projectName");
    const tag = data.get("tag");
    const startTime = data.get("startTime");
    const howMuchTime = data.get("howMuchTime");
    const selection = data.get("selection");
    const link = data.get("link");
    const desc = data.get("desc");

    if (link)
      console.log(
        [projectName, tag, startTime, howMuchTime, selection, link, desc]
          .filter((e) => String(e))
          .filter((e) => e)
      );
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component={"form"}
      sx={{
        pt: "16px",
        display: "grid",
        gap: "16px",
      }}
    >
      <Row
        text="Loyiha nomi"
        text1="Tag"
        variant={"text"}
        variant1={"text"}
        name={"projectName"}
        name1={"tag"}
      />
      <Row
        text="Boshlanish vaqti"
        text1="Qancha vaqtda habar yuboriladi?"
        type={true}
        type1={true}
        variant={"time"}
        variant1={"text"}
        name={"startTime"}
        name1={"howMuchTime"}
      />
      <FooterSection />
    </Box>
  );
};

export default FormSection;
