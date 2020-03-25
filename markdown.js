const { textarea } = require("saltcorn-markup/tags");
const md = require("markdown-it")();

module.exports = {
  name: "Markdown",
  sql_name: "text",
  editAs: (nm, v, attrs, cls) =>
    textarea(
      {
        class: `form-control ${cls || ""}`,
        name: nm,
        id: `input${nm}`
      },
      v || ""
    ),
  showAs: v => md.render(v),
  read: v => {
    switch (typeof v) {
      case "string":
        return v;
      default:
        return undefined;
    }
  },
  validate: ({ match }) => x => true
};