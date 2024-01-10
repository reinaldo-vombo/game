import { defineType } from "sanity";

export const comment = defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "text",
      title: "commentario",
      type: "text",
    },
    {
      name: "postedBy",
      title: "Posted By",
      type: 'reference',
      to: [{ type: 'user' }],
    },
    {
      name: 'post',
      type: 'reference',
      to: [{type: 'blog'}]
    }
  ],
});