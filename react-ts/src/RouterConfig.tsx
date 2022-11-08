import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {PostListPage} from "./pages/PostListPage";
import {PostDetailPage} from "./pages/PostDetailPage";
import {PostPage} from "./pages/PostPage";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";


export const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <main>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path="post" element={<PostPage/>}>
                            <Route index element={<PostListPage/>}/>
                            <Route path=":postId" element={<PostDetailPage/>}/>
                        </Route>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </BrowserRouter>
        </>
    )
}