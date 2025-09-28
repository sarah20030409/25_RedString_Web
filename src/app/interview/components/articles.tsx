import contentJson from "../components/content.json";

interface ArticlesProps {
  articleNum: string;
}

export default function Articles({ articleNum }: ArticlesProps) {
  const content = contentJson as any;
  const articleData = content[articleNum];

  // Get all keys that start with "section"
  const getSectionKey = (data: any) => {
    if (!data) return [];
    return Object.keys(data)
      .filter((key) => key.startsWith("section"))
      .sort();
  };

  const sectionKeys = getSectionKey(articleData); // Only section keys

  return (
    <div>
      <div data-aos="fade-up" className="flex justify-end max-md:block">
        <div className="my-[5%] ">
          <img
            className="max-md:mx-auto max-md:w-[250px] max-m_sm:w-[200px]"
            src={articleData.articleTop.image}
            alt={articleData.articleTop.title}
          />
        </div>
        <div className="w-[1800px] mx-[5%] flex justify-start items-center max-md:w-full max-md:mx-[3%]">
          <div>
            <h4 className="interview_title max-m_md:text-lg">
              {articleData.articleTop.title}
            </h4>
            <p
              className="little_text max-md:text-sm max-md:leading-6"
              style={{ whiteSpace: "pre-line" }}
            >
              {articleData.articleTop.paragraph}
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full h-[1px] bg-Cus_Brown mt-[5%] mb-[3%]"
      ></div>
      <div>
        {sectionKeys.map((sectionKey) => {
          const section = articleData[sectionKey];

          return (
            <div
              data-aos="fade-up"
              className="py-[3%] max-m_md:py-[5%] max-md:mx-[3%] max-md:py-[8%]"
              key={sectionKey}
            >
              <h4 className="interview_title max-m_md:text-lg max-md:tracking-wider max-m_sm:text-base">
                {section.title}
              </h4>
              <p className="little_text max-md:text-sm max-md:leading-6">
                {section.paragraph}
              </p>
              {section.image && <img src={section.image} alt={section.title} />}
            </div>
          );
        })}
      </div>
      <div>
        <h4
          data-aos="fade-up"
          className="interview_title text-center mt-[5%] max-m_md:text-lg max-m_sm:text-base"
          style={{ whiteSpace: "pre-line" }}
        >
          {articleData.articleBottom}
        </h4>
      </div>
      <iframe
        className="w-full mt-[10%] h-[700px] max-md:h-[400px]"
        src={articleData.videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
