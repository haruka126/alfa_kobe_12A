import { Switch, Route } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { PageLogin } from "../pages/PageLoginAdmin";
import { PageMarket } from "../pages/PageMarket";
import { PageTop } from "../pages/PageTop";

export const PageRoute: React.VFC = () => {
    return (
        <Switch>
            <Route exact path="/" component={PageTop} />
            <Route path="/store" render={({ match: { url } }) => (
                <Switch>
                    <Route exact path={url} component={PageMarket} />
                    <Route path={`${url}/admin`} component={PageLogin} />
                </Switch>
            )} />
            <Route component={Page404} />
        </Switch>
    );
};
