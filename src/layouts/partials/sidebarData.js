export const sidebarData = [
  {
    id: 1, name: "Forms", childData: [
      { id: 1, name: "Form Elements" , url : "/FormElements"},
      { id: 2, name: "Form Layouts" , url : "/FormLayouts" },
      { id: 3, name: "Cards" ,url : "/Cards" },
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
          { id: 1, name: "debit" ,url : "/Debit"},
          { id: 2, name: "credit", url : "/Credit" },
        ],
      },
      { id: 2, name: "Journel 2" ,url : "/Cards" },
    ],
  },
  {
    id: 4,
    name: "Security",
    url : "/Cards",
    childData: [
      {
        id: 1, name: "Menu Role Management",
        url : "/Cards",
        subChildData: [
          { id: 1, name: "sub child 1" ,url : "/Cards" },
          { id: 2, name: "sub child 2", url : "/Cards" },
        ],
      },
      { id: 2, name: "Menu Management" , url : "/Cards" },
      {
        id: 3, name: "Role Management", 
        url : "/Cards",
        subChildData: [
          { id: 1, name: "sub child 1" ,url : "/Cards" },
          { id: 2, name: "sub child 2" ,url : "/Cards" },
        ],
      },
      { id: 4, name: "User Management" ,url : "/Cards" },
    ],
  },
];
