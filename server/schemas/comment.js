export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
  ],
};




// import { CommentIcon } from '@sanity/icons'

// export default {
//   name: 'comment',
//   type: 'document',
//   title: 'Comment',
//   icon: CommentIcon,
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//     },
//     {
//       title: 'Approved',
//       name: 'approved',
//       type: 'boolean',
//       description: "Comments won't show on the site without approval",
//     },
//     {
//       name: 'email',
//       type: 'string',
//     },
//     {
//       name: 'comment',
//       type: 'text',
//     },
//     {
//       name: 'postedBy',
//       type: 'reference',
//       to: [{ type: 'postedBy' }],
//     },
//   ],
  // preview: {
  //   select: {
  //     name: 'name',
  //     comment: 'comment',
  //     post: 'post.title',
    // }
//     prepare({ name, comment, post }) {
//       return {
//         title: `${name} on ${post}`,
//         subtitle: comment,
//       }
//     },
//   },
// }
