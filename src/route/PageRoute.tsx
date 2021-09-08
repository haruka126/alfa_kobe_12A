import { Switch, Route } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { PageDummyLogin } from "../pages/PageDummyLogin";
import { PageMarket } from "../pages/PageMarket";
import { PageRealLogin } from "../pages/PageRealLogin";
import { PageTop } from "../pages/PageTop";

export const PageRoute: React.VFC = () => {
    return (
        <Switch>
            <Route exact path="/" component={PageTop} />
            <Route path="/market" render={({ match: { url } }) => (
                <Switch>
                    <Route exact path={url} component={PageMarket} />
                    <Route path={`${url}/dummyadmin`} component={PageDummyLogin} />
                    <Route path={`${url}/realadmin`} component={PageRealLogin} />
                </Switch>
            )} />
            <Route component={Page404} />
        </Switch>
    );
};
