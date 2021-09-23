export const sidebarData = [
  {
    id: 1, name: "Forms", childData: [
      { id: 1, name: "Form Elements" , url : "/form-elements"},
      { id: 2, name: "Form Layouts" , url : "/form-layouts" },
      { id: 3, name: "Cards" ,url : "/cards" },
    ]
  },
  {
    id: 2,
    name: "Audit",
    childData: [
      {
        id: 1,
        name: "Audit Type",
        url : "/audit-type",
        subChildData: [
          { id: 1, name: "internal-audit" , url : "/internal-audit" },
          { id: 2, name: "external-audit" , url : "/external-audit"},
        ],
      },
      { id: 2, name: "Audit History",  url : "/audit-history"},
    ],
  },
  {
    id: 3,
    name: "Accounts",
    url : "/accounts",
    childData: [
      {
        id: 1, name: "income",
        url : "/income",
         subChildData: [
          { id: 1, name: "debit" ,url : "/debit"},
          { id: 2, name: "credit", url : "/credit" },
        ],
      },
      { id: 2, name: "Journel 2" ,url : "/cards" },
    ],
  },
  {
    id: 4,
    name: "Security",
    url : "/cards",
    childData: [
      {
        id: 1, name: "Menu Role Management",
        url : "/cards",
        subChildData: [
          { id: 1, name: "sub child 1" ,url : "/cards" },
          { id: 2, name: "sub child 2", url : "/cards" },
        ],
      },
      { id: 2, name: "Menu Management" , url : "/cards" },
      {
        id: 3, name: "Role Management", 
        url : "/cards",
        subChildData: [
          { id: 1, name: "sub child 1" ,url : "/cards" },
          { id: 2, name: "sub child 2" ,url : "/cards" },
        ],
      },
      { id: 4, name: "User Management" ,url : "/cards" },
    ],
  },
];
