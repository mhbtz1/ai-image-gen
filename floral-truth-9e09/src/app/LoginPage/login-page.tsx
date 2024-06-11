'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cZoQqriJk53
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { signIn } from "../../../auth"

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}


export default function Component() {
  return (
    <>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-950">
      <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500 dark:text-gray-400">Sign in to your account to continue</p>
          </div>
          <div>
            <div className="space-y-4">
              <Button variant="outline" className="w-full" onClick={async () => signIn('google')}>
                <ChromeIcon className="mr-2 h-5 w-5"/>
              </Button>
              <Button variant="outline" className="w-full" onClick={async () => signIn('github')}>
                <GitlabIcon className="mr-2 h-5 w-5" />
                Sign in with GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GitlabIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}