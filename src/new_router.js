import React from "react";

import App from "./App";
import {requiresAuth,requiresAuthOrEmail,requiresNoAuth} from './routers'
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
import UserPage from "./Components/EstimateContainer";
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
import SupportPage from "./Components/EstimateContainer";
import SupportSectionList from "./App";
import SupportPageDetail from "./App";
import SearchPage from "./Components/EstimateContainer";
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
  return (
    <Switch>
      {props.children.map((child, index) => {
        const new_route = generateUrl(child.path, props.path);

        if (child.to) {
          return (
            <RenderRouteComponent
              path={new_route}
              render={({ match: { params }, location: { pathname } }) => {
                let uuu = generateUrl(child.to, props.path, params);
                return <Redirect to={uuu} />;
              }}
            />
          );
        }
        if (child.children) {
          // debugger;
          const { path, children, parent, ...rest } = child;
          const Parent = parent;
          const rrr = new_route.replace("//", "/");

          return (
            <RenderRouteComponent
              path={rrr}
              exact={false}
              render={({ match }) => {
                console.log(child);
                return (
                  <Parent {...rest}>
                    <NestedComponent
                      children={children}
                      parent={Div}
                      path={rrr}
                    />
                  </Parent>
                );
              }}
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

const Div = props => <div {...props} />;

class Div2 extends React.Component{
  componentDidMount(){
    const result = requiresNoAuth(this.props.routes);
    debugger;
  }
  render(){
    return <div>{this.props.children}</div>
  }
}
const TungeRoute = ({ base_url = "", routes }) => (
  <Div2 base_path={generateUrl("", base_url)} routes={routes}>
    <NestedComponent
      parent={Div}
      path={generateUrl("", base_url)}
      children={routes}
    />
  </Div2>
);

export default () => {
  const unauthorized_urls2 = [
    { path: "", component: LandingPage, unauthedOnly: true },
    { path: "agreement", component: Agreement },
    { path: "privacy", component: PrivacyPolicy },
    { path: "code-of-conduct", component: CodeOfConduct },
    {
      path: "welcome",
      exact: true,
      component: TaskWizardLander,
      unauthedOnly: true
    },
    { path: "welcome/:skill", component: TaskWizardLander, unauthedOnly: true },
    { path: "quiz", exact: true, component: QuizForm, unauthedOnly: true },
    { path: "quiz/*", exact: true, component: QuizForm, unauthedOnly: true },
    {
      path: "developer/profile",
      exact: true,
      component: DeveloperProfile,
      unauthedOnly: true
    },
    {
      path: "developer/profile/*",
      exact: true,
      component: DeveloperProfile,
      unauthedOnly: true
    },
    { path: "start", exact: true, component: TaskWizard, unauthedOnly: true },
    {
      path: "start/:phase/:taskId",
      exact: true,
      component: TaskWizard,
      unauthedOnly: true
    },
    {
      path: "start/:phase/:taskId/*",
      component: TaskWizard,
      unauthedOnly: true
    },
    { path: "start/*", component: TaskWizard, unauthedOnly: true },
    {
      path: "start-welcome",
      exact: true,
      component: TaskWizard,
      unauthedOnly: true
    },
    {
      path: "start-welcome/:phase/:taskId",
      exact: true,
      component: TaskWizard,
      unauthedOnly: true
    },
    {
      path: "start-welcome/:phase/:taskId/*",
      component: TaskWizard,
      unauthedOnly: true
    },
    { path: "start-welcome/*", component: TaskWizard, unauthedOnly: true },
    {
      path: "start-outsource",
      exact: true,
      component: TaskWizard,
      unauthedOnly: true
    },
    {
      path: "start-outsource/:phase/:taskId",
      exact: true,
      component: TaskWizard,
      unauthedOnly: true
    },
    {
      path: "start-outsource/:phase/:taskId/*",
      component: TaskWizard,
      unauthedOnly: true
    },
    { path: "start-outsource/*", component: TaskWizard, unauthedOnly: true },
    {
      path: "call",
      component: LandingPage,
      unauthedOnly: true,
      showCallWidget: true
    },
    { path: "our-story", component: StoryPage, unauthedOnly: true },
    { path: "quality", component: QualityPage, unauthedOnly: true },
    { path: "pricing", component: PricingPage, unauthedOnly: true },
    { path: "press", component: LandingPage, unauthedOnly: true },
    { path: "FAQ", component: LandingPage, unauthedOnly: true },
    { path: "signin", component: SignInPage, unauthedOnly: true },
    { path: "signup", exact: true, to: "signin", unauthedOnly: true },
    { path: "signup/project-owner", component: SignUpPage, unauthedOnly: true },
    {
      path: "signup/invite/:invitationKey",
      component: SignUpPage,
      unauthedOnly: true
    },
    {
      path: "signup/developer/invite/:invitationKey",
      component: SignUpPage,
      unauthedOnly: true
    },
    {
      path: "signup/developer/:confirmationKey",
      component: SignUpPage,
      unauthedOnly: true
    },
    {
      path: "reset-password",
      exact: true,
      component: PasswordResetPage,
      unauthedOnly: true
    },
    {
      path: "reset-password/confirm/:uid/:token",
      component: PasswordResetConfirmPage,
      unauthedOnly: true
    },
    {
      path: "people",
      parent: UserPage,
      children: [
        { path: "filter/:filter", component: UserList },
        { path: "skill/:skill(/:filter)", component: UserList },
        { path: "invite", component: InviteDeveloper },
        { path: ":userId", component: User },
        { path: "", to: "filter/developers" }
      ]
    },
    { path: "member", exact: false, to: "people" },
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
        { path: "people", component: UserList },
        { path: "developers", component: UserList },
        { path: "tasks", component: TaskList },
        { path: "messages", component: MessageList },
        { path: "support", component: SupportPageList },
        { path: "", exact: true, to: "people" }
      ]
    },
    {
      path: "customer/help/:chatId",
      component: LandingPage,
      unauthedOnly: true
    },
    {
      authedOrEmailOnly: true,
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
                { path: ":estimateId", exact: true, component: EstimateDetail }
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
                { path: "edit/:editSection", component: EditTaskSectionForm },
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
                        { path: "", exact: true, to: "new" },
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
    { path: ":skill", component: LandingPage, unauthedOnly: true },
    { path: "*", exact: false, to: "home" }
  ];
  return (
    <Router>
      <Switch>
        <Route
          path="/tunga"
          render={() => (
            <TungeRoute routes={unauthorized_urls2} base_url="/tunga" />
          )}
        />
        <Route
          path="/"
          render={() => <TungeRoute routes={unauthorized_urls2} />}
        />
      </Switch>
    </Router>
  );
};

