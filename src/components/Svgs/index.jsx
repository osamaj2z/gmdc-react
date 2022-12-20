export const ArrowRight = (props) => (
   <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd"
         d="M46.69 24.1226C46.4948 24.2036 46.3175 24.3223 46.1683 24.472C46.0186 24.6212 45.8999 24.7985 45.8189 24.9938C45.7379 25.189 45.6962 25.3982 45.6962 25.6096C45.6962 25.8209 45.7379 26.0302 45.8189 26.2254C45.8999 26.4206 46.0186 26.5979 46.1683 26.7472L53.0672 33.6435H13.6068C13.1807 33.6435 12.772 33.8128 12.4707 34.1142C12.1693 34.4155 12 34.8242 12 35.2503C12 35.6765 12.1693 36.0852 12.4707 36.3865C12.772 36.6878 13.1807 36.8571 13.6068 36.8571H53.0672L46.1683 43.7535C45.8666 44.0552 45.6971 44.4644 45.6971 44.8911C45.6971 45.3178 45.8666 45.727 46.1683 46.0287C46.47 46.3304 46.8792 46.4999 47.3059 46.4999C47.7326 46.4999 48.1418 46.3304 48.4435 46.0287L58.0842 36.3879C58.2339 36.2387 58.3526 36.0614 58.4336 35.8662C58.5146 35.671 58.5563 35.4617 58.5563 35.2503C58.5563 35.039 58.5146 34.8297 58.4336 34.6345C58.3526 34.4393 58.2339 34.262 58.0842 34.1127L48.4435 24.472C48.2942 24.3223 48.1169 24.2036 47.9217 24.1226C47.7265 24.0416 47.5172 23.9999 47.3059 23.9999C47.0945 23.9999 46.8853 24.0416 46.69 24.1226Z"
         fill={props?.color || "#43B40D"} />
   </svg>
);

export const ArrowLeft = (props) => (
   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M13.7217 13.0753C13.8415 13.1249 13.9502 13.1978 14.0418 13.2895C14.1336 13.3811 14.2064 13.4899 14.2561 13.6096C14.3058 13.7293 14.3313 13.8577 14.3313 13.9873C14.3313 14.117 14.3058 14.2453 14.2561 14.3651C14.2064 14.4848 14.1336 14.5936 14.0418 14.6851L9.81011 18.9152H34.0144C34.2758 18.9152 34.5265 19.019 34.7113 19.2039C34.8962 19.3887 35 19.6394 35 19.9008C35 20.1622 34.8962 20.4129 34.7113 20.5977C34.5265 20.7825 34.2758 20.8864 34.0144 20.8864H9.81006L14.0418 25.1165C14.2268 25.3015 14.3308 25.5525 14.3308 25.8143C14.3308 26.076 14.2268 26.327 14.0418 26.5121C13.8567 26.6971 13.6057 26.8011 13.344 26.8011C13.0823 26.8011 12.8313 26.6971 12.6462 26.5121L6.73274 20.5986C6.64096 20.507 6.56814 20.3983 6.51845 20.2785C6.46877 20.1588 6.44319 20.0304 6.44319 19.9008C6.44319 19.7712 6.46877 19.6428 6.51845 19.5231C6.56814 19.4033 6.64096 19.2946 6.73274 19.203L12.6462 13.2895C12.7378 13.1978 12.8465 13.1249 12.9663 13.0753C13.086 13.0256 13.2144 13 13.344 13C13.4736 13 13.602 13.0256 13.7217 13.0753Z" fill={props?.color || "#2B2926"} />
   </svg>
);

export const PreSchoolSvg = (props) => (
   <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 9V23M32 9V23M22 12V20M18 16H26M5 30H39C39.5304 30 40.0391 29.7893 40.4142 29.4142C40.7893 29.0391 41 28.5304 41 28V4C41 3.46957 40.7893 2.96086 40.4142 2.58579C40.0391 2.21071 39.5304 2 39 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V28C3 28.5304 3.21071 29.0391 3.58579 29.4142C3.96086 29.7893 4.46957 30 5 30Z" stroke="#43B40D" strokeWidth="3" strokeLinecap="round" />
      <path d="M2 36H42" stroke={props?.color || "#43B40D"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
   </svg>
);

export const MediumSchoolSvg = (props) => (
   <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.4167 0L0 4.25V7.08333L18.4167 2.83333L36.8333 7.08333V4.25L18.4167 0ZM9.91667 8.5C5.34508 8.5 0.885417 10.3601 0.885417 10.3601L0 10.7568V32.5833H15.9814C16.4744 33.4305 17.3697 34 18.4167 34C19.4622 34 20.3589 33.4305 20.8519 32.5833H36.8333V10.7582L35.9479 10.3601C35.9479 10.3601 31.4882 8.5 26.9167 8.5C22.7828 8.5 19.1533 9.88833 18.4167 10.183C17.68 9.88833 14.0505 8.5 9.91667 8.5ZM9.91667 11.3333C12.6565 11.3333 15.5833 12.2187 17 12.7061V28.4665C15.4232 27.9466 12.8336 27.2269 9.91667 27.2269C6.93883 27.2269 4.51492 27.9126 2.83333 28.4665V12.7061C3.92417 12.3108 6.8 11.3333 9.91667 11.3333ZM26.9167 11.3333C30.0333 11.3333 32.9092 12.3122 34 12.7061V28.4665C32.317 27.914 29.8945 27.2269 26.9167 27.2269C23.9998 27.2269 21.4101 27.9466 19.8333 28.4665V12.7061C21.25 12.2187 24.1768 11.3333 26.9167 11.3333Z" fill={props?.color || "#43B40D"} />
   </svg>
);

export const SeniorSchoolSvg = (props) => (
   <svg width="59" height="34" viewBox="0 0 59 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M29.2135 0L28.6294 0.177277L5.3034 7.99243L0 9.74094L3.08836 10.73V27.0582C1.97431 27.7057 1.22228 28.8869 1.22228 30.2678C1.22228 31.2577 1.61549 32.207 2.31541 32.9069C3.01532 33.6068 3.96461 34 4.95445 34C5.94428 34 6.89357 33.6068 7.59348 32.9069C8.2934 32.207 8.68661 31.2577 8.68661 30.2678C8.68661 28.8869 7.93458 27.7057 6.82053 27.0582V12.0176L10.5527 13.2398V22.8035C10.5527 24.3337 11.4857 25.6026 12.5942 26.4797C13.7026 27.3512 15.0798 27.967 16.7332 28.5193C20.0436 29.6203 24.4065 30.2678 29.2135 30.2678C34.0205 30.2678 38.3834 29.6222 41.6939 28.5175C43.3472 27.967 44.7244 27.3512 45.8328 26.4778C46.9413 25.6026 47.8743 24.3337 47.8743 22.8035V13.2398L53.1236 11.4895L58.427 9.74094L53.1217 7.99056L29.7957 0.177277L29.2135 0ZM29.2135 3.90944L46.708 9.74094L29.2135 15.5724L11.719 9.74094L29.2135 3.90944ZM14.2849 14.5237L28.6313 19.3046L29.2135 19.48L29.7976 19.3027L44.1422 14.5218V22.8035C44.1422 22.8222 44.1496 23.0386 43.5581 23.5033C42.9684 23.9698 41.9103 24.5576 40.5257 25.0204C37.7602 25.9404 33.6828 26.5357 29.2135 26.5357C24.7442 26.5357 20.6669 25.9423 17.8995 25.0186C16.5186 24.5576 15.4586 23.9679 14.8689 23.5033C14.2755 23.0368 14.2849 22.8222 14.2849 22.8035V14.5218V14.5237Z" fill={props?.color || "#43B40D"} />
   </svg>
);

export const BulbSvg = (props) => (
   <svg width="28" height="38" viewBox="0 0 28 38" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M14.1445 28.7133V20.2127M14.1445 20.2127C14.9637 20.2134 15.7798 20.1105 16.5732 19.9067M14.1445 20.2127C13.3253 20.2134 12.5092 20.1105 11.7158 19.9067M17.7876 32.0148C15.3804 32.4719 12.9086 32.4719 10.5014 32.0148M16.5732 35.8732C14.9585 36.0423 13.3305 36.0423 11.7158 35.8732M17.7876 28.7133V28.4024C17.7876 26.8108 18.853 25.4507 20.2293 24.6525C22.5414 23.3135 24.3475 21.2493 25.3675 18.7798C26.3876 16.3103 26.5647 13.5734 25.8715 10.993C25.1783 8.4126 23.6534 6.13287 21.5331 4.50703C19.4129 2.88119 16.8156 2 14.1437 2C11.4718 2 8.87451 2.88119 6.75423 4.50703C4.63396 6.13287 3.10907 8.4126 2.41585 10.993C1.72263 13.5734 1.89977 16.3103 2.91983 18.7798C3.93989 21.2493 5.74592 23.3135 8.05808 24.6525C9.43436 25.4507 10.5014 26.8108 10.5014 28.4024V28.7133" stroke={props?.color || "#FDFCFC"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
   </svg>
);

export const ArrowBackLongSvg = (props) => (
   <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z" fill={props?.color || "#2B2926"} />
   </svg>
);

export const ArrowForwardFooter = (props) => (
   <svg width="18" height="8" viewBox="0 0 18 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.3361 2.72836H1.74503C1.16601 2.72836 0.692261 3.2021 0.692261 3.78113C0.692261 4.36015 1.16601 4.8339 1.74503 4.8339H13.3361V6.71837C13.3361 7.19211 13.9046 7.42372 14.2309 7.08684L17.1576 4.1496C17.3577 3.93905 17.3577 3.61269 17.1576 3.40213L14.2309 0.464896C13.9046 0.128009 13.3361 0.370146 13.3361 0.833366V2.72836Z" fill={props?.color || "#FDFCFC"} />
   </svg>
)


export const FacebookSvg = (props) => (
   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28.8 0H1.2C0.53625 0 0 0.53625 0 1.2V28.8C0 29.4638 0.53625 30 1.2 30H28.8C29.4638 30 30 29.4638 30 28.8V1.2C30 0.53625 29.4638 0 28.8 0ZM25.335 8.75625H22.9388C21.06 8.75625 20.6963 9.64875 20.6963 10.9613V13.8525H25.1813L24.5963 18.3787H20.6963V30H16.02V18.3825H12.1088V13.8525H16.02V10.515C16.02 6.64125 18.3863 4.53 21.8438 4.53C23.5013 4.53 24.9225 4.65375 25.3388 4.71V8.75625H25.335Z" fill={props?.color || "#FDFCFC"} />
   </svg>
);

export const InstagramSvg = (props) => (
   <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0.700672 3.51006C0 4.88521 0 6.68538 0 10.2857V19.7143C0 23.3146 0 25.1148 0.700672 26.4899C1.317 27.6996 2.30045 28.683 3.51006 29.2993C4.88521 30 6.68538 30 10.2857 30H19.7143C23.3146 30 25.1148 30 26.4899 29.2993C27.6996 28.683 28.683 27.6996 29.2993 26.4899C30 25.1148 30 23.3146 30 19.7143V10.2857C30 6.68538 30 4.88521 29.2993 3.51006C28.683 2.30045 27.6996 1.317 26.4899 0.700672C25.1148 0 23.3146 0 19.7143 0H10.2857C6.68538 0 4.88521 0 3.51006 0.700672C2.30045 1.317 1.317 2.30045 0.700672 3.51006ZM4.28571 14.5714C4.28571 10.9711 4.28571 9.17092 4.98639 7.79578C5.60272 6.58616 6.58616 5.60272 7.79578 4.98639C9.17092 4.28571 10.9711 4.28571 14.5714 4.28571H15.4286C19.0289 4.28571 20.8291 4.28571 22.2042 4.98639C23.4138 5.60272 24.3973 6.58616 25.0136 7.79578C25.7143 9.17092 25.7143 10.9711 25.7143 14.5714V15.4286C25.7143 19.0289 25.7143 20.8291 25.0136 22.2042C24.3973 23.4138 23.4138 24.3973 22.2042 25.0136C20.8291 25.7143 19.0289 25.7143 15.4286 25.7143H14.5714C10.9711 25.7143 9.17092 25.7143 7.79578 25.0136C6.58616 24.3973 5.60272 23.4138 4.98639 22.2042C4.28571 20.8291 4.28571 19.0289 4.28571 15.4286V14.5714ZM15.4286 6.42857H14.5714C12.7359 6.42857 11.4881 6.43024 10.5237 6.50904C9.58419 6.5858 9.10375 6.72492 8.76861 6.89569C7.9622 7.30657 7.30657 7.9622 6.89569 8.76861C6.72492 9.10375 6.5858 9.58419 6.50904 10.5237C6.43024 11.4881 6.42857 12.7359 6.42857 14.5714V15.4286C6.42857 17.2641 6.43024 18.5119 6.50904 19.4763C6.5858 20.4158 6.72492 20.8962 6.89569 21.2314C7.30657 22.0378 7.9622 22.6934 8.76861 23.1043C9.10375 23.2751 9.58419 23.4142 10.5237 23.491C11.4881 23.5698 12.7359 23.5714 14.5714 23.5714H15.4286C17.2641 23.5714 18.5119 23.5698 19.4763 23.491C20.4158 23.4142 20.8962 23.2751 21.2314 23.1043C22.0378 22.6934 22.6934 22.0378 23.1043 21.2314C23.2751 20.8962 23.4142 20.4158 23.491 19.4763C23.5698 18.5119 23.5714 17.2641 23.5714 15.4286V14.5714C23.5714 12.7359 23.5698 11.4881 23.491 10.5237C23.4142 9.58419 23.2751 9.10375 23.1043 8.76861C22.6934 7.9622 22.0378 7.30657 21.2314 6.89569C20.8962 6.72492 20.4158 6.5858 19.4763 6.50904C18.5119 6.43024 17.2641 6.42857 15.4286 6.42857ZM20.3571 15C20.3571 17.9587 17.9587 20.3571 15 20.3571C12.0413 20.3571 9.64286 17.9587 9.64286 15C9.64286 12.0413 12.0413 9.64286 15 9.64286C17.9587 9.64286 20.3571 12.0413 20.3571 15ZM15 18.2143C16.7752 18.2143 18.2143 16.7752 18.2143 15C18.2143 13.2248 16.7752 11.7857 15 11.7857C13.2248 11.7857 11.7857 13.2248 11.7857 15C11.7857 16.7752 13.2248 18.2143 15 18.2143ZM22.5 9.10714C22.5 9.99474 21.7805 10.7143 20.8929 10.7143C20.0053 10.7143 19.2857 9.99474 19.2857 9.10714C19.2857 8.21954 20.0053 7.5 20.8929 7.5C21.7805 7.5 22.5 8.21954 22.5 9.10714Z" fill={props?.color || "#FDFCFC"} />
   </svg>
);

export const YoutubeSvg = (props) => (
   <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.9167 0.470169C2.94592 0.617349 0.559555 2.9435 0.366759 5.91166C0.182046 8.75539 0 12.2545 0 15C0 17.7455 0.182046 21.2446 0.366759 24.0883C0.559555 27.0565 2.94592 29.3827 5.9167 29.5298C10.2186 29.743 16.3672 30 21 30C25.6328 30 31.7814 29.743 36.0833 29.5298C39.0541 29.3827 41.4404 27.0565 41.6332 24.0883C41.818 21.2446 42 17.7455 42 15C42 12.2545 41.818 8.75539 41.6332 5.91166C41.4404 2.9435 39.0541 0.617349 36.0833 0.470169C31.7814 0.257043 25.6328 0 21 0C16.3672 0 10.2186 0.257043 5.9167 0.470169ZM27 15L15 9V21L27 15Z" fill={props?.color || "#FDFCFC"} />
   </svg>
);