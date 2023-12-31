import { BasicButton, Body2 } from "@/mui/customize";

interface IProps {
  login: string
}
const LoginGmail = ({login}: IProps) => {
  return (
    <>
      <div className="flex justify-center">
        <BasicButton className="rounded-2xl flex justify-center items-center gap-2 py-2 px-6" variant="outlined" color="secondary">
          <span className="flex">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_238_1406)">
                <path d="M17.3197 7.43517L9.97763 7.43481C9.65342 7.43481 9.39062 7.69757 9.39062 8.02178V10.3672C9.39062 10.6914 9.65342 10.9542 9.97759 10.9542H14.1122C13.6594 12.1292 12.8144 13.1131 11.7363 13.7384L13.4993 16.7902C16.3273 15.1547 17.9993 12.2849 17.9993 9.07239C17.9993 8.61497 17.9656 8.28799 17.8982 7.91979C17.8469 7.64006 17.604 7.43517 17.3197 7.43517Z" fill="#167EE6" />
                <path d="M8.99922 14.4783C6.97584 14.4783 5.20945 13.3727 4.26076 11.7368L1.20898 13.4958C2.76201 16.1875 5.67133 18 8.99922 18C10.6318 18 12.1722 17.5605 13.4992 16.7944V16.7902L11.7362 13.7383C10.9298 14.2061 9.99664 14.4783 8.99922 14.4783Z" fill="#12B347" />
                <path d="M13.5 16.7944V16.7903L11.737 13.7383C10.9306 14.206 9.99749 14.4783 9 14.4783V18C10.6326 18 12.1731 17.5605 13.5 16.7944Z" fill="#0F993E" />
                <path d="M3.52174 9C3.52174 8.00265 3.79392 7.06957 4.26154 6.26319L1.20976 4.50418C0.439523 5.827 0 7.36326 0 9C0 10.6367 0.439523 12.173 1.20976 13.4958L4.26154 11.7368C3.79392 10.9304 3.52174 9.99734 3.52174 9Z" fill="#FFD500" />
                <path d="M8.99922 3.52174C10.3187 3.52174 11.5306 3.99059 12.4773 4.77046C12.7108 4.96283 13.0503 4.94895 13.2642 4.73502L14.926 3.07318C15.1688 2.83046 15.1515 2.43316 14.8922 2.20823C13.3061 0.832254 11.2424 0 8.99922 0C5.67133 0 2.76201 1.81255 1.20898 4.50418L4.26076 6.26319C5.20945 4.62727 6.97584 3.52174 8.99922 3.52174Z" fill="#FF4B26" />
                <path d="M12.4781 4.77046C12.7116 4.96283 13.0511 4.94895 13.265 4.73502L14.9268 3.07318C15.1695 2.83047 15.1522 2.43316 14.893 2.20823C13.3069 0.832219 11.2432 0 9 0V3.52174C10.3194 3.52174 11.5314 3.99059 12.4781 4.77046Z" fill="#D93F21" />
              </g>
              <defs>
                <clipPath id="clip0_238_1406">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <Body2 className="them-register-color">
            {login} with Google Account
          </Body2>
        </BasicButton>
      </div>
    </>
  )
}

export default LoginGmail;