import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"

test("Logo should load on rendering Header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    
    //Check if Logo is Loaded
    // console.log(header);
    
    const logo = header.getAllByTestId("logo");
    // console.log(logo);
    expect(logo[0].src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREb9ExSSBTUgiAGr_x2wsay3rapsB0YEzGWw&usqp=CAU");
});

test("Online status should be green on rendering Header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    
    //Check if online status is green
    
    const status = header.getByTestId("online-status");
    expect(status.innerHTML).toBe("✅");
});

test("Cart item should zero on rendering Header", () => {
    //Load Header
    const header = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
    );
    
    //Check if online status is green
    
    const cartItem = header.getByTestId("cart");
    expect(cartItem.innerHTML).toBe("Cart - 0 Items");
});