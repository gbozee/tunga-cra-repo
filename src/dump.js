var routes = [
  {
    path: "/",
    childRoutes: [
      {
        path: "tunga",
        childRoutes: [
          {
            indexRoute: { unauthedOnly: true },
            childRoutes: [
              { path: "agreement" },
              { path: "privacy" },
              { path: "code-of-conduct" },
              {
                unauthedOnly: true,
                childRoutes: [
                  {
                    path: "welcome",
                    indexRoute: {},
                    childRoutes: [{ path: ":skill", unauthedOnly: true }]
                  },
                  {
                    path: "quiz",
                    indexRoute: {},
                    childRoutes: [{ path: "*" }]
                  },
                  {
                    path: "developer/profile",
                    indexRoute: {},
                    childRoutes: [{ path: "*" }]
                  },
                  {
                    path: "start",
                    indexRoute: {},
                    childRoutes: [
                      { path: ":phase/:taskId" },
                      { path: ":phase/:taskId/*" },
                      { path: "*" }
                    ]
                  },
                  {
                    path: "start-welcome",
                    indexRoute: {},
                    childRoutes: [
                      { path: ":phase/:taskId" },
                      { path: ":phase/:taskId/*" },
                      { path: "*" }
                    ]
                  },
                  {
                    path: "start-outsource",
                    indexRoute: {},
                    childRoutes: [
                      { path: ":phase/:taskId" },
                      { path: ":phase/:taskId/*" },
                      { path: "*" }
                    ]
                  },
                  { path: "call", showCallWidget: true },
                  { path: "our-story" },
                  { path: "quality" },
                  { path: "pricing" },
                  { path: "press" },
                  { path: "FAQ" },
                  { path: "press" },
                  { path: "signin" },
                  {
                    path: "signup",
                    indexRoute: { to: "/signin" },
                    childRoutes: [
                      { path: "project-owner" },
                      { path: "invite/:invitationKey" },
                      {
                        path: "developer",
                        childRoutes: [
                          { path: "invite/:invitationKey" },
                          { path: ":confirmationKey" }
                        ]
                      }
                    ]
                  },
                  { path: "reset-password" },
                  { path: "reset-password/confirm/:uid/:token" }
                ]
              },
              {
                authedOrEmailOnly: true,
                childRoutes: [
                  {
                    authedOnly: true,
                    childRoutes: [
                      { path: "home" },
                      {
                        path: "profile",
                        indexRoute: { to: "personal" },
                        childRoutes: [
                          { path: "personal" },
                          { path: "stack" },
                          { path: "company" },
                          { path: "payment" },
                          { path: "payment/:provider" },
                          { path: "account" },
                          { path: "id-document" },
                          { path: "photo" },
                          { path: "security" },
                          { path: "security" },
                          { path: "complete" },
                          { path: "*", to: "personal" }
                        ]
                      },
                      {
                        path: "proposal",
                        indexRoute: {},
                        childRoutes: [
                          { path: "new" },
                          { path: "filter/:filter" },
                          {
                            path: ":estimateId",
                            indexRoute: {},
                            childRoutes: [{ path: "edit" }]
                          }
                        ]
                      },
                      { path: "estimate*", to: "proposal*" },
                      { path: "settings" },
                      {
                        path: "work",
                        indexRoute: {},
                        childRoutes: [
                          { path: "new" },
                          { path: "filter/:filter" },
                          { path: "skill/:skill(/:filter)" },
                          {
                            path: ":taskId",
                            indexRoute: {},
                            childRoutes: [
                              {
                                path: "edit",
                                crumb: "Edit",
                                indexRoute: {},
                                childRoutes: [
                                  {
                                    path: ":editSection",
                                    crumbs: {
                                      trello: "Trello",
                                      "google-drive": "Google Drive"
                                    }
                                  },
                                  {
                                    path: "participation",
                                    crumb: "Participation"
                                  },
                                  {
                                    path: "payment-approval",
                                    crumb: "Payment Review"
                                  },
                                  { path: "*" }
                                ]
                              },
                              { path: "apply", crumb: "Apply" },
                              {
                                path: "proposal",
                                crumb: "Proposal",
                                indexRoute: { to: "new" },
                                childRoutes: [
                                  { path: "new" },
                                  {
                                    path: ":estimateId",
                                    indexRoute: {},
                                    childRoutes: [{ path: "edit" }]
                                  }
                                ]
                              },
                              { path: "estimate*", to: "proposal*" },
                              {
                                path: "planning",
                                crumb: "Planning",
                                indexRoute: { to: "new" },
                                childRoutes: [
                                  { path: "new" },
                                  {
                                    path: ":quoteId",
                                    indexRoute: {},
                                    childRoutes: [{ path: "edit" }]
                                  }
                                ]
                              },
                              {
                                path: "applications",
                                indexRoute: { crumb: "Applications" },
                                childRoutes: [{ path: ":applicationId" }]
                              },
                              { path: "board", crumb: "Project Board" },
                              { path: "task/new", crumb: "Add task" },
                              { path: "task/new/*", crumb: "Add task" },
                              {
                                path: "integrations",
                                crumb: "Integrations",
                                indexRoute: { to: "github" },
                                childRoutes: [
                                  { path: "trello", crumb: "Trello" },
                                  { path: "google", crumb: "Google Drive" },
                                  {
                                    path: ":provider",
                                    crumb: "Integrations",
                                    crumbs: { slack: "Slack", github: "GitHub" }
                                  }
                                ]
                              },
                              { path: "invoice", crumb: "Generate Invoice" },
                              { path: "pay", crumb: "Make Payment" },
                              {
                                path: "participation",
                                crumb: "Participation shares"
                              },
                              { path: "rate", crumb: "Rate Developers" },
                              {
                                path: "event",
                                childRoutes: [{ path: ":eventId" }]
                              }
                            ]
                          },
                          { path: "*" }
                        ]
                      },
                      { path: "task*", to: "work*" },
                      {
                        path: "conversation",
                        indexRoute: { to: "start" },
                        childRoutes: [
                          {
                            path: "start",
                            childRoutes: [
                              { path: ":recipientId" },
                              { path: "task/:taskId" }
                            ]
                          },
                          {
                            path: ":channelId",
                            indexRoute: { to: "messages" },
                            childRoutes: [
                              { path: "edit" },
                              { path: ":channelView" }
                            ]
                          }
                        ]
                      },
                      { path: "message*", to: "channel" },
                      { path: "channel*", to: "conversation*" },
                      {
                        path: "payments",
                        indexRoute: {},
                        childRoutes: [
                          { path: "filter/:filter" },
                          {
                            path: "bulk",
                            childRoutes: [
                              {
                                path: ":batchId",
                                indexRoute: {},
                                childRoutes: [{ path: "processing" }]
                              }
                            ]
                          }
                        ]
                      },
                      {
                        path: "help",
                        childRoutes: [{ path: ":channelId", indexRoute: {} }]
                      },
                      {
                        path: "dashboard",
                        childRoutes: [
                          {
                            path: "updates",
                            indexRoute: {},
                            childRoutes: [{ path: "filter/:filter" }]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    path: "people",
                    indexRoute: { to: "filter/developers" },
                    childRoutes: [
                      { path: "filter/:filter" },
                      { path: "skill/:skill(/:filter)" },
                      { path: "invite" },
                      { path: ":userId" }
                    ]
                  },
                  { path: "member*", to: "people*" },
                  {
                    path: "support",
                    indexRoute: {},
                    childRoutes: [
                      {
                        path: ":section",
                        indexRoute: {},
                        childRoutes: [{ path: "tag/:tag" }, { path: ":page" }]
                      }
                    ]
                  },
                  {
                    path: "search",
                    indexRoute: { to: "people" },
                    childRoutes: [
                      { path: "people" },
                      { path: "developers" },
                      { path: "tasks", authedOnly: true },
                      { path: "messages", authedOnly: true },
                      { path: "support" }
                    ]
                  }
                ]
              },
              { path: "customer/help/:chatId", unauthedOnly: true },
              { path: ":skill", unauthedOnly: true },
              { path: "*", to: "home" }
            ]
          }
        ]
      },
      {
        indexRoute: { unauthedOnly: true },
        childRoutes: [
          { path: "agreement" },
          { path: "privacy" },
          { path: "code-of-conduct" },
          {
            unauthedOnly: true,
            childRoutes: [
              {
                path: "welcome",
                indexRoute: {},
                childRoutes: [{ path: ":skill", unauthedOnly: true }]
              },
              { path: "quiz", indexRoute: {}, childRoutes: [{ path: "*" }] },
              {
                path: "developer/profile",
                indexRoute: {},
                childRoutes: [{ path: "*" }]
              },
              {
                path: "start",
                indexRoute: {},
                childRoutes: [
                  { path: ":phase/:taskId" },
                  { path: ":phase/:taskId/*" },
                  { path: "*" }
                ]
              },
              {
                path: "start-welcome",
                indexRoute: {},
                childRoutes: [
                  { path: ":phase/:taskId" },
                  { path: ":phase/:taskId/*" },
                  { path: "*" }
                ]
              },
              {
                path: "start-outsource",
                indexRoute: {},
                childRoutes: [
                  { path: ":phase/:taskId" },
                  { path: ":phase/:taskId/*" },
                  { path: "*" }
                ]
              },
              { path: "call", showCallWidget: true },
              { path: "our-story" },
              { path: "quality" },
              { path: "pricing" },
              { path: "press" },
              { path: "FAQ" },
              { path: "press" },
              { path: "signin" },
              {
                path: "signup",
                indexRoute: { to: "/signin" },
                childRoutes: [
                  { path: "project-owner" },
                  { path: "invite/:invitationKey" },
                  {
                    path: "developer",
                    childRoutes: [
                      { path: "invite/:invitationKey" },
                      { path: ":confirmationKey" }
                    ]
                  }
                ]
              },
              { path: "reset-password" },
              { path: "reset-password/confirm/:uid/:token" }
            ]
          },
          {
            authedOrEmailOnly: true,
            childRoutes: [
              {
                authedOnly: true,
                childRoutes: [
                  { path: "home" },
                  {
                    path: "profile",
                    indexRoute: { to: "personal" },
                    childRoutes: [
                      { path: "personal" },
                      { path: "stack" },
                      { path: "company" },
                      { path: "payment" },
                      { path: "payment/:provider" },
                      { path: "account" },
                      { path: "id-document" },
                      { path: "photo" },
                      { path: "security" },
                      { path: "security" },
                      { path: "complete" },
                      { path: "*", to: "personal" }
                    ]
                  },
                  {
                    path: "proposal",
                    indexRoute: {},
                    childRoutes: [
                      { path: "new" },
                      { path: "filter/:filter" },
                      {
                        path: ":estimateId",
                        indexRoute: {},
                        childRoutes: [{ path: "edit" }]
                      }
                    ]
                  },
                  { path: "estimate*", to: "proposal*" },
                  { path: "settings" },
                  {
                    path: "work",
                    indexRoute: {},
                    childRoutes: [
                      { path: "new" },
                      { path: "filter/:filter" },
                      { path: "skill/:skill(/:filter)" },
                      {
                        path: ":taskId",
                        indexRoute: {},
                        childRoutes: [
                          {
                            path: "edit",
                            crumb: "Edit",
                            indexRoute: {},
                            childRoutes: [
                              {
                                path: ":editSection",
                                crumbs: {
                                  trello: "Trello",
                                  "google-drive": "Google Drive"
                                }
                              },
                              { path: "participation", crumb: "Participation" },
                              {
                                path: "payment-approval",
                                crumb: "Payment Review"
                              },
                              { path: "*" }
                            ]
                          },
                          { path: "apply", crumb: "Apply" },
                          {
                            path: "proposal",
                            crumb: "Proposal",
                            indexRoute: { to: "new" },
                            childRoutes: [
                              { path: "new" },
                              {
                                path: ":estimateId",
                                indexRoute: {},
                                childRoutes: [{ path: "edit" }]
                              }
                            ]
                          },
                          { path: "estimate*", to: "proposal*" },
                          {
                            path: "planning",
                            crumb: "Planning",
                            indexRoute: { to: "new" },
                            childRoutes: [
                              { path: "new" },
                              {
                                path: ":quoteId",
                                indexRoute: {},
                                childRoutes: [{ path: "edit" }]
                              }
                            ]
                          },
                          {
                            path: "applications",
                            indexRoute: { crumb: "Applications" },
                            childRoutes: [{ path: ":applicationId" }]
                          },
                          { path: "board", crumb: "Project Board" },
                          { path: "task/new", crumb: "Add task" },
                          { path: "task/new/*", crumb: "Add task" },
                          {
                            path: "integrations",
                            crumb: "Integrations",
                            indexRoute: { to: "github" },
                            childRoutes: [
                              { path: "trello", crumb: "Trello" },
                              { path: "google", crumb: "Google Drive" },
                              {
                                path: ":provider",
                                crumb: "Integrations",
                                crumbs: { slack: "Slack", github: "GitHub" }
                              }
                            ]
                          },
                          { path: "invoice", crumb: "Generate Invoice" },
                          { path: "pay", crumb: "Make Payment" },
                          {
                            path: "participation",
                            crumb: "Participation shares"
                          },
                          { path: "rate", crumb: "Rate Developers" },
                          { path: "event", childRoutes: [{ path: ":eventId" }] }
                        ]
                      },
                      { path: "*" }
                    ]
                  },
                  { path: "task*", to: "work*" },
                  {
                    path: "conversation",
                    indexRoute: { to: "start" },
                    childRoutes: [
                      {
                        path: "start",
                        childRoutes: [
                          { path: ":recipientId" },
                          { path: "task/:taskId" }
                        ]
                      },
                      {
                        path: ":channelId",
                        indexRoute: { to: "messages" },
                        childRoutes: [
                          { path: "edit" },
                          { path: ":channelView" }
                        ]
                      }
                    ]
                  },
                  { path: "message*", to: "channel" },
                  { path: "channel*", to: "conversation*" },
                  {
                    path: "payments",
                    indexRoute: {},
                    childRoutes: [
                      { path: "filter/:filter" },
                      {
                        path: "bulk",
                        childRoutes: [
                          {
                            path: ":batchId",
                            indexRoute: {},
                            childRoutes: [{ path: "processing" }]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    path: "help",
                    childRoutes: [{ path: ":channelId", indexRoute: {} }]
                  },
                  {
                    path: "dashboard",
                    childRoutes: [
                      {
                        path: "updates",
                        indexRoute: {},
                        childRoutes: [{ path: "filter/:filter" }]
                      }
                    ]
                  }
                ]
              },
              {
                path: "people",
                indexRoute: { to: "filter/developers" },
                childRoutes: [
                  { path: "filter/:filter" },
                  { path: "skill/:skill(/:filter)" },
                  { path: "invite" },
                  { path: ":userId" }
                ]
              },
              { path: "member*", to: "people*" },
              {
                path: "support",
                indexRoute: {},
                childRoutes: [
                  {
                    path: ":section",
                    indexRoute: {},
                    childRoutes: [{ path: "tag/:tag" }, { path: ":page" }]
                  }
                ]
              },
              {
                path: "search",
                indexRoute: { to: "people" },
                childRoutes: [
                  { path: "people" },
                  { path: "developers" },
                  { path: "tasks", authedOnly: true },
                  { path: "messages", authedOnly: true },
                  { path: "support" }
                ]
              }
            ]
          },
          { path: "customer/help/:chatId", unauthedOnly: true },
          { path: ":skill", unauthedOnly: true },
          { path: "*", to: "home" }
        ]
      }
    ]
  },
  {
    indexRoute: { unauthedOnly: true },
    childRoutes: [
      { path: "agreement" },
      { path: "privacy" },
      { path: "code-of-conduct" },
      {
        unauthedOnly: true,
        childRoutes: [
          {
            path: "welcome",
            indexRoute: {},
            childRoutes: [{ path: ":skill", unauthedOnly: true }]
          },
          { path: "quiz", indexRoute: {}, childRoutes: [{ path: "*" }] },
          {
            path: "developer/profile",
            indexRoute: {},
            childRoutes: [{ path: "*" }]
          },
          {
            path: "start",
            indexRoute: {},
            childRoutes: [
              { path: ":phase/:taskId" },
              { path: ":phase/:taskId/*" },
              { path: "*" }
            ]
          },
          {
            path: "start-welcome",
            indexRoute: {},
            childRoutes: [
              { path: ":phase/:taskId" },
              { path: ":phase/:taskId/*" },
              { path: "*" }
            ]
          },
          {
            path: "start-outsource",
            indexRoute: {},
            childRoutes: [
              { path: ":phase/:taskId" },
              { path: ":phase/:taskId/*" },
              { path: "*" }
            ]
          },
          { path: "call", showCallWidget: true },
          { path: "our-story" },
          { path: "quality" },
          { path: "pricing" },
          { path: "press" },
          { path: "FAQ" },
          { path: "press" },
          { path: "signin" },
          {
            path: "signup",
            indexRoute: { to: "/signin" },
            childRoutes: [
              { path: "project-owner" },
              { path: "invite/:invitationKey" },
              {
                path: "developer",
                childRoutes: [
                  { path: "invite/:invitationKey" },
                  { path: ":confirmationKey" }
                ]
              }
            ]
          },
          { path: "reset-password" },
          { path: "reset-password/confirm/:uid/:token" }
        ]
      },
      {
        authedOrEmailOnly: true,
        childRoutes: [
          {
            authedOnly: true,
            childRoutes: [
              { path: "home" },
              {
                path: "profile",
                indexRoute: { to: "personal" },
                childRoutes: [
                  { path: "personal" },
                  { path: "stack" },
                  { path: "company" },
                  { path: "payment" },
                  { path: "payment/:provider" },
                  { path: "account" },
                  { path: "id-document" },
                  { path: "photo" },
                  { path: "security" },
                  { path: "security" },
                  { path: "complete" },
                  { path: "*", to: "personal" }
                ]
              },
              {
                path: "proposal",
                indexRoute: {},
                childRoutes: [
                  { path: "new" },
                  { path: "filter/:filter" },
                  {
                    path: ":estimateId",
                    indexRoute: {},
                    childRoutes: [{ path: "edit" }]
                  }
                ]
              },
              { path: "estimate*", to: "proposal*" },
              { path: "settings" },
              {
                path: "work",
                indexRoute: {},
                childRoutes: [
                  { path: "new" },
                  { path: "filter/:filter" },
                  { path: "skill/:skill(/:filter)" },
                  {
                    path: ":taskId",
                    indexRoute: {},
                    childRoutes: [
                      {
                        path: "edit",
                        crumb: "Edit",
                        indexRoute: {},
                        childRoutes: [
                          {
                            path: ":editSection",
                            crumbs: {
                              trello: "Trello",
                              "google-drive": "Google Drive"
                            }
                          },
                          { path: "participation", crumb: "Participation" },
                          { path: "payment-approval", crumb: "Payment Review" },
                          { path: "*" }
                        ]
                      },
                      { path: "apply", crumb: "Apply" },
                      {
                        path: "proposal",
                        crumb: "Proposal",
                        indexRoute: { to: "new" },
                        childRoutes: [
                          { path: "new" },
                          {
                            path: ":estimateId",
                            indexRoute: {},
                            childRoutes: [{ path: "edit" }]
                          }
                        ]
                      },
                      { path: "estimate*", to: "proposal*" },
                      {
                        path: "planning",
                        crumb: "Planning",
                        indexRoute: { to: "new" },
                        childRoutes: [
                          { path: "new" },
                          {
                            path: ":quoteId",
                            indexRoute: {},
                            childRoutes: [{ path: "edit" }]
                          }
                        ]
                      },
                      {
                        path: "applications",
                        indexRoute: { crumb: "Applications" },
                        childRoutes: [{ path: ":applicationId" }]
                      },
                      { path: "board", crumb: "Project Board" },
                      { path: "task/new", crumb: "Add task" },
                      { path: "task/new/*", crumb: "Add task" },
                      {
                        path: "integrations",
                        crumb: "Integrations",
                        indexRoute: { to: "github" },
                        childRoutes: [
                          { path: "trello", crumb: "Trello" },
                          { path: "google", crumb: "Google Drive" },
                          {
                            path: ":provider",
                            crumb: "Integrations",
                            crumbs: { slack: "Slack", github: "GitHub" }
                          }
                        ]
                      },
                      { path: "invoice", crumb: "Generate Invoice" },
                      { path: "pay", crumb: "Make Payment" },
                      { path: "participation", crumb: "Participation shares" },
                      { path: "rate", crumb: "Rate Developers" },
                      { path: "event", childRoutes: [{ path: ":eventId" }] }
                    ]
                  },
                  { path: "*" }
                ]
              },
              { path: "task*", to: "work*" },
              {
                path: "conversation",
                indexRoute: { to: "start" },
                childRoutes: [
                  {
                    path: "start",
                    childRoutes: [
                      { path: ":recipientId" },
                      { path: "task/:taskId" }
                    ]
                  },
                  {
                    path: ":channelId",
                    indexRoute: { to: "messages" },
                    childRoutes: [{ path: "edit" }, { path: ":channelView" }]
                  }
                ]
              },
              { path: "message*", to: "channel" },
              { path: "channel*", to: "conversation*" },
              {
                path: "payments",
                indexRoute: {},
                childRoutes: [
                  { path: "filter/:filter" },
                  {
                    path: "bulk",
                    childRoutes: [
                      {
                        path: ":batchId",
                        indexRoute: {},
                        childRoutes: [{ path: "processing" }]
                      }
                    ]
                  }
                ]
              },
              {
                path: "help",
                childRoutes: [{ path: ":channelId", indexRoute: {} }]
              },
              {
                path: "dashboard",
                childRoutes: [
                  {
                    path: "updates",
                    indexRoute: {},
                    childRoutes: [{ path: "filter/:filter" }]
                  }
                ]
              }
            ]
          },
          {
            path: "people",
            indexRoute: { to: "filter/developers" },
            childRoutes: [
              { path: "filter/:filter" },
              { path: "skill/:skill(/:filter)" },
              { path: "invite" },
              { path: ":userId" }
            ]
          },
          { path: "member*", to: "people*" },
          {
            path: "support",
            indexRoute: {},
            childRoutes: [
              {
                path: ":section",
                indexRoute: {},
                childRoutes: [{ path: "tag/:tag" }, { path: ":page" }]
              }
            ]
          },
          {
            path: "search",
            indexRoute: { to: "people" },
            childRoutes: [
              { path: "people" },
              { path: "developers" },
              { path: "tasks", authedOnly: true },
              { path: "messages", authedOnly: true },
              { path: "support" }
            ]
          }
        ]
      },
      { path: "customer/help/:chatId", unauthedOnly: true },
      { path: ":skill", unauthedOnly: true },
      { path: "*", to: "home" }
    ]
  },
  {
    authedOrEmailOnly: true,
    childRoutes: [
      {
        authedOnly: true,
        childRoutes: [
          { path: "home" },
          {
            path: "profile",
            indexRoute: { to: "personal" },
            childRoutes: [
              { path: "personal" },
              { path: "stack" },
              { path: "company" },
              { path: "payment" },
              { path: "payment/:provider" },
              { path: "account" },
              { path: "id-document" },
              { path: "photo" },
              { path: "security" },
              { path: "security" },
              { path: "complete" },
              { path: "*", to: "personal" }
            ]
          },
          {
            path: "proposal",
            indexRoute: {},
            childRoutes: [
              { path: "new" },
              { path: "filter/:filter" },
              {
                path: ":estimateId",
                indexRoute: {},
                childRoutes: [{ path: "edit" }]
              }
            ]
          },
          { path: "estimate*", to: "proposal*" },
          { path: "settings" },
          {
            path: "work",
            indexRoute: {},
            childRoutes: [
              { path: "new" },
              { path: "filter/:filter" },
              { path: "skill/:skill(/:filter)" },
              {
                path: ":taskId",
                indexRoute: {},
                childRoutes: [
                  {
                    path: "edit",
                    crumb: "Edit",
                    indexRoute: {},
                    childRoutes: [
                      {
                        path: ":editSection",
                        crumbs: {
                          trello: "Trello",
                          "google-drive": "Google Drive"
                        }
                      },
                      { path: "participation", crumb: "Participation" },
                      { path: "payment-approval", crumb: "Payment Review" },
                      { path: "*" }
                    ]
                  },
                  { path: "apply", crumb: "Apply" },
                  {
                    path: "proposal",
                    crumb: "Proposal",
                    indexRoute: { to: "new" },
                    childRoutes: [
                      { path: "new" },
                      {
                        path: ":estimateId",
                        indexRoute: {},
                        childRoutes: [{ path: "edit" }]
                      }
                    ]
                  },
                  { path: "estimate*", to: "proposal*" },
                  {
                    path: "planning",
                    crumb: "Planning",
                    indexRoute: { to: "new" },
                    childRoutes: [
                      { path: "new" },
                      {
                        path: ":quoteId",
                        indexRoute: {},
                        childRoutes: [{ path: "edit" }]
                      }
                    ]
                  },
                  {
                    path: "applications",
                    indexRoute: { crumb: "Applications" },
                    childRoutes: [{ path: ":applicationId" }]
                  },
                  { path: "board", crumb: "Project Board" },
                  { path: "task/new", crumb: "Add task" },
                  { path: "task/new/*", crumb: "Add task" },
                  {
                    path: "integrations",
                    crumb: "Integrations",
                    indexRoute: { to: "github" },
                    childRoutes: [
                      { path: "trello", crumb: "Trello" },
                      { path: "google", crumb: "Google Drive" },
                      {
                        path: ":provider",
                        crumb: "Integrations",
                        crumbs: { slack: "Slack", github: "GitHub" }
                      }
                    ]
                  },
                  { path: "invoice", crumb: "Generate Invoice" },
                  { path: "pay", crumb: "Make Payment" },
                  { path: "participation", crumb: "Participation shares" },
                  { path: "rate", crumb: "Rate Developers" },
                  { path: "event", childRoutes: [{ path: ":eventId" }] }
                ]
              },
              { path: "*" }
            ]
          },
          { path: "task*", to: "work*" },
          {
            path: "conversation",
            indexRoute: { to: "start" },
            childRoutes: [
              {
                path: "start",
                childRoutes: [
                  { path: ":recipientId" },
                  { path: "task/:taskId" }
                ]
              },
              {
                path: ":channelId",
                indexRoute: { to: "messages" },
                childRoutes: [{ path: "edit" }, { path: ":channelView" }]
              }
            ]
          },
          { path: "message*", to: "channel" },
          { path: "channel*", to: "conversation*" },
          {
            path: "payments",
            indexRoute: {},
            childRoutes: [
              { path: "filter/:filter" },
              {
                path: "bulk",
                childRoutes: [
                  {
                    path: ":batchId",
                    indexRoute: {},
                    childRoutes: [{ path: "processing" }]
                  }
                ]
              }
            ]
          },
          {
            path: "help",
            childRoutes: [{ path: ":channelId", indexRoute: {} }]
          },
          {
            path: "dashboard",
            childRoutes: [
              {
                path: "updates",
                indexRoute: {},
                childRoutes: [{ path: "filter/:filter" }]
              }
            ]
          }
        ]
      },
      {
        path: "people",
        indexRoute: { to: "filter/developers" },
        childRoutes: [
          { path: "filter/:filter" },
          { path: "skill/:skill(/:filter)" },
          { path: "invite" },
          { path: ":userId" }
        ]
      },
      { path: "member*", to: "people*" },
      {
        path: "support",
        indexRoute: {},
        childRoutes: [
          {
            path: ":section",
            indexRoute: {},
            childRoutes: [{ path: "tag/:tag" }, { path: ":page" }]
          }
        ]
      },
      {
        path: "search",
        indexRoute: { to: "people" },
        childRoutes: [
          { path: "people" },
          { path: "developers" },
          { path: "tasks", authedOnly: true },
          { path: "messages", authedOnly: true },
          { path: "support" }
        ]
      }
    ]
  },
  {
    authedOnly: true,
    childRoutes: [
      { path: "home" },
      {
        path: "profile",
        indexRoute: { to: "personal" },
        childRoutes: [
          { path: "personal" },
          { path: "stack" },
          { path: "company" },
          { path: "payment" },
          { path: "payment/:provider" },
          { path: "account" },
          { path: "id-document" },
          { path: "photo" },
          { path: "security" },
          { path: "security" },
          { path: "complete" },
          { path: "*", to: "personal" }
        ]
      },
      {
        path: "proposal",
        indexRoute: {},
        childRoutes: [
          { path: "new" },
          { path: "filter/:filter" },
          {
            path: ":estimateId",
            indexRoute: {},
            childRoutes: [{ path: "edit" }]
          }
        ]
      },
      { path: "estimate*", to: "proposal*" },
      { path: "settings" },
      {
        path: "work",
        indexRoute: {},
        childRoutes: [
          { path: "new" },
          { path: "filter/:filter" },
          { path: "skill/:skill(/:filter)" },
          {
            path: ":taskId",
            indexRoute: {},
            childRoutes: [
              {
                path: "edit",
                crumb: "Edit",
                indexRoute: {},
                childRoutes: [
                  {
                    path: ":editSection",
                    crumbs: { trello: "Trello", "google-drive": "Google Drive" }
                  },
                  { path: "participation", crumb: "Participation" },
                  { path: "payment-approval", crumb: "Payment Review" },
                  { path: "*" }
                ]
              },
              { path: "apply", crumb: "Apply" },
              {
                path: "proposal",
                crumb: "Proposal",
                indexRoute: { to: "new" },
                childRoutes: [
                  { path: "new" },
                  {
                    path: ":estimateId",
                    indexRoute: {},
                    childRoutes: [{ path: "edit" }]
                  }
                ]
              },
              { path: "estimate*", to: "proposal*" },
              {
                path: "planning",
                crumb: "Planning",
                indexRoute: { to: "new" },
                childRoutes: [
                  { path: "new" },
                  {
                    path: ":quoteId",
                    indexRoute: {},
                    childRoutes: [{ path: "edit" }]
                  }
                ]
              },
              {
                path: "applications",
                indexRoute: { crumb: "Applications" },
                childRoutes: [{ path: ":applicationId" }]
              },
              { path: "board", crumb: "Project Board" },
              { path: "task/new", crumb: "Add task" },
              { path: "task/new/*", crumb: "Add task" },
              {
                path: "integrations",
                crumb: "Integrations",
                indexRoute: { to: "github" },
                childRoutes: [
                  { path: "trello", crumb: "Trello" },
                  { path: "google", crumb: "Google Drive" },
                  {
                    path: ":provider",
                    crumb: "Integrations",
                    crumbs: { slack: "Slack", github: "GitHub" }
                  }
                ]
              },
              { path: "invoice", crumb: "Generate Invoice" },
              { path: "pay", crumb: "Make Payment" },
              { path: "participation", crumb: "Participation shares" },
              { path: "rate", crumb: "Rate Developers" },
              { path: "event", childRoutes: [{ path: ":eventId" }] }
            ]
          },
          { path: "*" }
        ]
      },
      { path: "task*", to: "work*" },
      {
        path: "conversation",
        indexRoute: { to: "start" },
        childRoutes: [
          {
            path: "start",
            childRoutes: [{ path: ":recipientId" }, { path: "task/:taskId" }]
          },
          {
            path: ":channelId",
            indexRoute: { to: "messages" },
            childRoutes: [{ path: "edit" }, { path: ":channelView" }]
          }
        ]
      },
      { path: "message*", to: "channel" },
      { path: "channel*", to: "conversation*" },
      {
        path: "payments",
        indexRoute: {},
        childRoutes: [
          { path: "filter/:filter" },
          {
            path: "bulk",
            childRoutes: [
              {
                path: ":batchId",
                indexRoute: {},
                childRoutes: [{ path: "processing" }]
              }
            ]
          }
        ]
      },
      { path: "help", childRoutes: [{ path: ":channelId", indexRoute: {} }] },
      {
        path: "dashboard",
        childRoutes: [
          {
            path: "updates",
            indexRoute: {},
            childRoutes: [{ path: "filter/:filter" }]
          }
        ]
      }
    ]
  },
  { path: "home" }
];
