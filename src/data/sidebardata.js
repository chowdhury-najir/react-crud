export let sidebardata = [
    {
        id: 1, name: "Forms",
        url: "/FormElements",
        icon : "icon ion-paper-airplane",
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
        icon : "icon ion-clipboard",
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
      icon : "icon ion-clock",
      ParentId : 0
    },
    {
        id: 6,
        name: "Audit Type",
        url : "/AuditType",
        icon : "icon ion-ios-gear-outline"
        ,
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
        icon : "ion-android-list",
        ParentId: 0
    },
    {
        id: 11,
        name: "income",
        url: "/income",
        icon: "icon cash-outline",
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
        icon : "icon ion-android-lock",
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
