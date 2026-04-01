/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Wishlist } from './pages/Wishlist';
import { Auth } from './pages/Auth';
import { NotFound } from './pages/NotFound';
import { Shipping } from './pages/policies/Shipping';
import { Returns } from './pages/policies/Returns';
import { Privacy } from './pages/policies/Privacy';
import { Terms } from './pages/policies/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'shop/:category', element: <Shop /> },
      { path: 'product/:id', element: <ProductDetails /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'wishlist', element: <Wishlist /> },
      { path: 'auth', element: <Auth /> },
      { path: 'policies/shipping', element: <Shipping /> },
      { path: 'policies/returns', element: <Returns /> },
      { path: 'policies/privacy', element: <Privacy /> },
      { path: 'policies/terms', element: <Terms /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

