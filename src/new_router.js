import React from "react";

import App from "./App";

import {
  BrowserRouter as Router,
  Route,
  IndexRoute,
  Switch,
  IndexRedirect,
  Redirect
} from "react-router-dom";
import AppWrapper from "./Components/AppWrapper";
import LandingPage from "./Components/LandingPage";
import PricingPage from "./Components/PricingPage";
import QualityPage from "./App";
import Home from "./App";
import SignInPage from "./App";
import SignUpPage from "./App";
import PasswordResetPage from "./App";
import PasswordResetConfirmPage from "./App";
import Agreement from "./App";
import PrivacyPolicy from "./App";
import CodeOfConduct from "./App";
import SettingsPage from "./App";
import ProjectBoard from "./App";
import ProjectTaskForm from "./App";
import TaskContainer from "./Components/EstimateContainer";
import TaskList from "./App";
import TaskForm from "./App";
import EditTaskSectionForm from "./App";
import TaskDetailPage from "./Components/EstimateDetailContainer";
import ApplicationForm from "./App";
import TaskWorkflow from "./App";
import ApplicationList from "./App";
import ApplicationDetail from "./App";
import MilestoneContainer from "./App";
import Milestone from "./App";
import MilestoneList from "./App";
import IntegrationList from "./App";
import TaskPay from "./App";
import Participation from "./App";
import RateDevelopers from "./App";
import UserPage from "./App";
import UserList from "./App";
import User from "./App";
import InviteDeveloper from "./App";
import MessagePage from "./App";
import ChannelContainer from "./App";
import ChannelForm from "./App";
import ChatBox from "./App";
import MessageList from "./App";
import ProfilePage from "./Components/ProfilePage";
import Profile from "./App";
import Stack from "./App";
import CompanyProfile from "./App";
import PaymentMethod from "./App";
import Account from "./App";
import IDDocument from "./App";
import ProfilePicture from "./App";
import PasswordChangeForm from "./App";
import ProfileType from "./App";
import PaymentList from "./App";
import SupportPage from "./App";
import SupportSectionList from "./App";
import SupportPageDetail from "./App";
import SearchPage from "./App";
import SupportPageList from "./App";
import EstimateDetailContainer from "./Components/EstimateDetailContainer";
import EstimateContainer from "./Components/EstimateContainer";
import EstimateForm from "./App";
import EstimateDetail from "./App";
import EstimateList from "./App";
import QuoteContainer from "./Components/EstimateContainer";
import QuoteDetailContainer from "./Components/EstimateDetailContainer";
import QuoteForm from "./App";
import QuoteDetail from "./App";
import TaskWizard from "./App";
import StoryPage from "./App";
import TaskWizardLander from "./Components/TaskWizardLander";
import MultiTaskPaymentContainer from "./App";
import MultiTaskPaymentDetailContainer from "./App";
import MultiTaskPay from "./App";
import MultiTaskPayProcessing from "./App";
import QuizForm from "./App";
import DeveloperProfile from "./App";

function generateUrl(childUrl, parentUrl, params = {}) {
  var url = `${parentUrl}/${childUrl}`;
  Object.keys(params).forEach(val => {
    url = url.replace(`:${val}`, params[val]);
  });
  return url.replace("//", "/");
}
const NestedComponent = props => {
  const component2 = props.path === "" && props.to ? Div : Switch;
  return (
    <Switch>
      {props.children.map((child, index) => {
        const new_route = generateUrl(child.path, props.path);
        console.log(props.path);
        // if(child.path === "" && chil)
        if (child.to) {
          return (
            <RenderRouteComponent
              path={new_route}
              render={({ match: { params }, location: { pathname } }) => {
                let uuu = generateUrl(child.to, props.path, params);
                // debugger;
                // if (uuu !== pathname) {
                return <Redirect to={uuu} />;
                // }
                // return <child.component path=
              }}
            />
          );
        }
        if (child.children) {
          // debugger;
          const { path, ...rest } = child;
          // if (props.parent){
          //   return
          // }
          return (
            <RenderRouteComponent
              path={new_route.replace("//", "/")}
              exact={false}
              render={({ match }) => (
                <props.parent name={child.name}>
                  <NestedComponent
                    path={new_route.replace("//", "/")}
                    {...rest}
                  />
                </props.parent>
              )}
            />
          );
        }
        return (
          <RenderRouteComponent
            path={new_route.replace("//", "/")}
            exact={child.exact === false ? false : true}
            render={({ match }) => (
              <props.parent>
                <child.component />
              </props.parent>
            )}
          />
        );
      })}
    </Switch>
  );
};

const RenderRouteComponent = props => {
  if (props.to) {
    return <Redirect {...props} />;
  }
  return <Route {...props} />;
};

const regularRoutes = [];
const WrappedComponent = ({ base_url = "" }) => {
  return (
    <AppWrapper>
      <Switch>
        {authRoutes.map((url2, index) => {
          const { path, ...rest } = url2;
          const full_url = generateUrl(path, base_url);
          if (rest.children) {
            return <NestedComponent path={full_url} {...rest} />;
          }
          return <RenderRouteComponent path={full_url} {...rest} />;
        })}
      </Switch>
    </AppWrapper>
  );
};
const Div = props => <div {...props} />;
const AuthComponent = ({ base_url = "" }) => {
  const unauthorized_urls = [
    {
      path: "",
      parent: Div,
      children: [
        { path: "welcome", exact: true, component: TaskWizardLander },
        { path: "welcome/:skill", component: TaskWizardLander },
        { path: "quiz", exact: true, component: QuizForm },
        { path: "quiz/*", exact: true, component: QuizForm },
        { path: "developer/profile", exact: true, component: DeveloperProfile },
        {
          path: "developer/profile/*",
          exact: true,
          component: DeveloperProfile
        },
        { path: "start", exact: true, component: TaskWizard },
        { path: "start/:phase/:taskId", exact: true, component: TaskWizard },
        { path: "start/:phase/:taskId/*", component: TaskWizard },
        { path: "start/*", component: TaskWizard },
        { path: "start-welcome", exact: true, component: TaskWizard },
        {
          path: "start-welcome/:phase/:taskId",
          exact: true,
          component: TaskWizard
        },
        { path: "start-welcome/:phase/:taskId/*", component: TaskWizard },
        { path: "start-welcome/*", component: TaskWizard },
        { path: "start-outsource", exact: true, component: TaskWizard },
        {
          path: "start-outsource/:phase/:taskId",
          exact: true,
          component: TaskWizard
        },
        { path: "start-outsource/:phase/:taskId/*", component: TaskWizard },
        { path: "start-outsource/*", component: TaskWizard },
        { path: "call", component: LandingPage },
        { path: "our-story", component: StoryPage },
        { path: "quality", component: QualityPage },
        { path: "pricing", component: PricingPage },
        { path: "press", component: LandingPage },
        { path: "FAQ", component: LandingPage },
        { path: "signin", component: SignInPage },
        { path: "signup", exact: true, to: "signin" },
        { path: "signup/project-owner", component: SignUpPage },
        { path: "signup/invite/:invitationKey", component: SignUpPage },
        {
          path: "signup/developer/invite/:invitationKey",
          component: SignUpPage
        },
        { path: "signup/developer/:confirmationKey", component: SignUpPage },
        { path: "reset-password", exact: true, component: PasswordResetPage },
        {
          path: "reset-password/confirm/:uid/:token",
          component: PasswordResetConfirmPage
        }
      ]
    },
    {
      parent: AppWrapper,
      path: "",
      children: [
        { path: "home", component: Home },
        {
          parent: ProfilePage,
          path: "profile",
          children: [
            { path: "", exact: true, to: "personal" },
            { path: "personal", component: Profile },
            { path: "stack", component: Stack },
            { path: "company", component: CompanyProfile },
            { path: "payment", exact: true, component: PaymentMethod },
            { path: "payment/:provider", component: PaymentMethod },
            { path: "account", component: Account },
            { path: "id-document", component: IDDocument },
            { path: "photo", component: ProfilePicture },
            { path: "security", component: PasswordChangeForm },
            { path: "complete", component: ProfileType },
            { path: "*", to: "personal" }
          ]
        },
        {
          parent: EstimateContainer,
          path: "proposal",
          children: [
            { path: "", exact: true, component: EstimateList },
            { path: "new", component: EstimateForm },
            { path: "filter/:filter", component: EstimateList },
            {
              parent: EstimateDetailContainer,
              path: "",
              children: [
                { path: "edit", component: EstimateForm },
                {
                  path: ":estimateId",
                  exact: true,
                  component: EstimateDetail
                }
              ]
            }
          ]
        },
        { path: "estimate*", to: "/proposal" },
        { path: "settings*", component: SettingsPage },
        {
          parent: TaskContainer,
          path: "work",
          children: [
            { path: "", exact: true, component: TaskList },
            { path: "new", component: TaskForm },
            { path: "filter/:filter", component: TaskList },
            { path: "skill/:skill/:filter", component: TaskList },
            {
              parent: TaskDetailPage,
              path: ":taskId",
              children: [
                { path: "", exact: true, component: TaskWorkflow },
                { path: "edit", exact: true, component: TaskForm },
                { path: "edit/participation", component: TaskForm },
                { path: "edit/payment-approval", component: TaskForm },
                {
                  path: "edit/:editSection",
                  component: EditTaskSectionForm
                },
                { path: "edit/*", component: TaskForm },
                { path: "apply", component: ApplicationForm },
                {
                  parent: EstimateContainer,
                  path: "proposal",
                  children: [
                    { path: "new", component: EstimateForm },
                    {
                      parent: EstimateDetailContainer,
                      path: "",
                      children: [
                        {
                          path: "",
                          exact: true,
                          to: "new"
                        },
                        {
                          path: "edit",
                          component: EstimateForm
                        },
                        {
                          path: ":estimateId",
                          exact: true,
                          component: EstimateDetail
                        }
                      ]
                    }
                  ]
                },
                { path: "estimate", to: "proposal" },
                {
                  parent: QuoteContainer,
                  path: "planning",
                  name: "QuoteContainer",
                  children: [
                    { path: "new", component: QuoteForm },
                    {
                      parent: QuoteDetailContainer,
                      path: ":quoteId",
                      name: "QuoteDetailContainer",
                      children: [
                        { path: "", exact: true, component: QuoteDetail },
                        { path: "edit", component: QuoteForm }
                      ]
                    },
                    { path: "", exact: true, to: "new" }
                  ]
                },
                {
                  path: "applications",
                  exact: true,
                  component: ApplicationList
                },
                {
                  path: "applications/:applicationId",
                  component: ApplicationDetail
                },
                { path: "board", component: ProjectBoard },
                { path: "task/new", exact: true, component: ProjectTaskForm },
                { path: "task/new/*", component: ProjectTaskForm },
                { path: "integrations/trello", component: TaskForm },
                { path: "integrations/google", component: TaskForm },
                { path: "integrations/:provider", component: IntegrationList },
                {
                  path: "integrations",
                  exact: true,
                  to: "integrations/github"
                },
                { path: "invoice", component: TaskPay },
                { path: "participation", component: Participation },
                { path: "rate", component: RateDevelopers },
                {
                  path: "event",
                  parent: MilestoneContainer,
                  children: [{ path: ":eventId", component: Milestone }]
                },
                { path: "*", component: TaskForm },
                { path: "task*", to: "work*" }
              ]
            }
          ]
        },
        {
          path: "conversation",
          parent: MessagePage,
          children: [
            { path: "", exact: true, to: "start" },
            { path: "start/:recipientId", component: ChannelForm },
            { path: "start/task/:taskId", component: ChannelForm },
            {
              path: ":channelId",
              parent: ChannelContainer,
              children: [
                { path: "", exact: true, to: "messages" },
                { path: "edit", component: ChannelForm },
                { path: ":channelView", component: ChatBox }
              ]
            }
          ]
        },
        { path: "channel*", to: "conversation*" },
        { path: "message*", to: "channel" },
        {
          path: "payments",
          parent: TaskContainer,
          children: [
            { path: "", exact: true, component: PaymentList },
            { path: "filter/:filter", component: PaymentList },
            {
              path: "bulk",
              parent: MultiTaskPaymentContainer,
              children: [
                {
                  path: ":batchId",
                  parent: MultiTaskPaymentDetailContainer,
                  children: [
                    { path: "", exact: true, component: MultiTaskPay },
                    { path: "processing", component: MultiTaskPayProcessing }
                  ]
                }
              ]
            }
          ]
        },
        {
          path: "help",
          parent: MessagePage,
          children: [
            {
              path: ":channelId",
              parent: ChannelContainer,
              children: [{ path: "", exact: true, component: ChatBox }]
            }
          ]
        },
        {
          path: "dashboard/updates",
          parent: MilestoneContainer,
          children: [
            { path: "", exact: true, component: MilestoneList },
            { path: "filter/:filter", component: MilestoneList }
          ]
        }
      ]
    },
    {
      path: "people",
      parent: UserPage,
      children: [
        { path: "", exact: true, redirect: "filter/developers" },
        { path: "filter/:filter", component: UserList },
        { path: "skill/:skill(/:filter)", component: UserList },
        { path: "invite", component: InviteDeveloper },
        { path: ":userId", component: User }
      ]
    },
    { path: "member*", to: "people*" },
    {
      path: "support",
      parent: SupportPage,
      children: [
        { path: "", exact: true, component: SupportSectionList },
        { path: ":section", exact: true, component: SupportPageList },
        { path: "tag/:tag", exact: true, component: SupportPageList },
        { path: ":page", exact: true, component: SupportPageDetail }
      ]
    },
    {
      path: "search",
      parent: SearchPage,
      children: [
        { path: "", exact: true, to: "people" },
        { path: "people", component: UserList },
        { path: "developers", component: UserList },
        { path: "tasks", component: TaskList },
        { path: "messages", component: MessageList },
        { path: "support", component: SupportPageList }
      ]
    },
    {
      path: "customer/help/:chatId",
      component: LandingPage
    }
  ];
  return (
    <Switch>
      {unauthorized_urls.map((url2, index) => {
        const { path, ...rest } = url2;
        const full_url = generateUrl(path, base_url);
        if (rest.children) {
          return <NestedComponent path={full_url} {...rest} />;
        }
        return <RenderRouteComponent path={full_url} {...rest} />;
      })}
    </Switch>
    // <Switch>
    //   {/* {unauthorized_urls.map((url, index) => {
    //     let props = url;
    //     if (props.path) {
    //       props.path = `${generateUrl(url.path, base_url)}`;
    //     }
    //     let Component = Route;
    //     if (!!url.component === false) {
    //       Component = Redirect;
    //     }
    //     return <Component key={index} {...props} exact />;
    //   })} */}
    //   <WrappedComponent base_url={base_url} />
    // </Switch>
  );
};
export const TungeRoute = ({ base_route = "" }) => {
  return (
    <Switch>
      <Route
        exact
        path={`${generateUrl("", base_route)}`}
        component={LandingPage}
        unauthedOnly={true}
      />
      <Route
        exact
        path={`${generateUrl("agreement", base_route)}`}
        component={Agreement}
      />
      <Route
        exact
        path={`${generateUrl("privacy", base_route)}`}
        component={PrivacyPolicy}
      />
      <Route
        exact
        path={`${generateUrl("code-of-conduct", base_route)}`}
        component={CodeOfConduct}
      />
      <AuthComponent base_url={base_route} />
      <Route
        path={`${generateUrl(":skill", base_route)}`}
        component={LandingPage}
      />
      <Redirect path="*" to="home" />
    </Switch>
  );
};

export default () => {
  return (
    <Router>
      <div>
        {/* <TungeRoute base_route="/tunga" /> */}
        <TungeRoute base_route="" />
      </div>
    </Router>
  );
};
