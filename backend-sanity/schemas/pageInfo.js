export default {
  name: "pageInfo",
  title: "Page Info",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "introduce",
      title: "Introduce Yourself",
      type: "text",
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "myPicture",
      title: "My Picture",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "myAvatar",
      title: "My Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "social" },
        },
      ],
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
  ],
};
