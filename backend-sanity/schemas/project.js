export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the project",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
    {
      name: "linkToCode",
      title: "Link to Code",
      type: "url",
    },
    {
      name: "linkToWebSite",
      title: "Link To Website",
      type: "url",
    },
    {
      name: "feature",
      title: "Features",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};
