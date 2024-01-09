import { defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "text",
    },
    {
      name: "postedBy",
      title: "Posted By",
      type: 'reference',
      to: [{ type: 'user' }],
    },
  ],
});