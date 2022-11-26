import { createBrowserRouter } from "react-router-dom";
import NoMatch from "../components/NoMatch";
import Catalogue from "../features/catalogue/Catalogue";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Reservations from "../pages/User/Reservations";
import Unauthorized from "../pages/Unauthorized";
import Root from "../Root";
import RequireAuth from "./RequireAuth";
import Profile from "../pages/User/Profile";
import Wishlist from "../pages/User/Wishlist";
import AddBook from "../pages/Admin/AddBook";
import BookDetails from "../features/catalogue/BookDetails";

// NOTES
// The backend routes are not protected
// :userId route: need to be the parent? Content of the parent and children?

export const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <h1>A routing error occured. Refresh the page.</h1>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'catalogue',
        element: <Catalogue />,
      },
      {
        path: 'book/:bookId',
        element: <BookDetails />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'registration',
        element: <Registration />
      },
      {
        path: 'unauthorized',
        element: <Unauthorized />
      },
      {
        element: <RequireAuth admittedRoles={['user']} />,
        children: [
          {
            path: '/user/:userId/profile',
            element: <Profile />
          },
          {
            path: '/user/:userId/reservations',
            element: <Reservations />
          },
          {
            path: '/user/:userId/wishlist',
            element: <Wishlist />
          }
        ] 
      },
      {
        element: <RequireAuth admittedRoles={['admin']} />,
        children: [
          {
            path: '/admin/:userId/profile',
            element: <Profile />
          },
          {
            path: '/admin/:userId/dashboard',
            element: <div>Admin Dashboard - need implementation</div>
          },
          {
            path: '/admin/:userId/addBook',
            element: <AddBook /> 
          },
          {
            path: '/admin/:userId/edit',
            element: <div>Edit page - need implementation</div>
          },
          {
            path: '/admin/:userId/history',
            element: <div>History - need implementation</div> 
          },
          {
            path: '/admin/:userId/exploreUsers',
            element: <div>Explore users page - need implementation</div>
          }
        ]
      },
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  },
]);
