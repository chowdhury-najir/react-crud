export const data = [
    {
        id: 1, name: "Forms",
        url: "/FormElements",
        ParentId: 0
    },
    {
        id: 2, name: "Form Elements",
        url: "/FormElements",
        ParentId: 1
    },
    {
        id: 3, name: "Form Layouts",
        url: "/FormLayouts",
        ParentId: 1
    },
    {
        id: 4, name: "Cards",
        url: "/Cards",
        ParentId: 1
    },
    {
      id: 5,
      name: "Audit",
      url : "/Audit",
      ParentId : 0
    },
    {
        id: 6,
        name: "Audit Type",
        url : "/AuditType",
        ParentId : 5
    },
    {
        id: 7, 
        name: "InternalAudit",
        url: "/InternalAudit",
        ParentId: 6
    },
    {
        id: 8,
        name: "external-audit",
        url: "/ExternalAudit",
        ParentId: 6
    },
    {
        id: 9,
        name: "AuditHistory",
        url: "/AuditHistory",
        ParentId: 5
    },
    {
        id: 10,
        name: "Accounts",
        url: "/Accounts",
        ParentId: 0
    },
    {
        id: 11,
        name: "income",
        url: "/income",
        ParentId: 10
    },
    {
        id: 12,
        name: "Debit",
        url: "/Debit",
        ParentId: 11
    },
    {
        id: 13,
        name: "Credit",
        url: "/Credit",
        ParentId: 11
    },
    {
        id: 14,
        name: "Journal",
        url: "/Cards",
        ParentId: 10
    },
    {
        id: 15,
        name: "Security",
        url: "/Cards",
        ParentId: 0
    },
    {
        id: 16,
        name: "Hardware Security",
        url: "/Cards",
        ParentId: 15
    },
    {
        id: 17,
        name: "Software Security",
        url: "/Cards",
        ParentId: 15
    }
];


export const listToTreeConverter = function listToTree(menus) {
    let parentMenus;
    parentMenus = menus.filter((x) => x.ParentId === 0);
    for (let i = 0; i < parentMenus.length; i++) {
      let childMenus;
      
      childMenus = menus.filter(
        (x) => x.ParentId === parentMenus[i].id
      );
      parentMenus[i].childMenus = childMenus;
    
      for (let j = 0; j<childMenus.length;j++){
       let subChildMenus = menus.filter(
            (x) => x.ParentId === childMenus[j].id
          );
          if(subChildMenus.length >=1){
            parentMenus[i].childMenus[j].subChildMenus = subChildMenus;
          }
          
      }
     
    }
    return parentMenus;
  }

  //const data  = list_to_tree(sidebarData);
  
  