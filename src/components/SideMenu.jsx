import "./SideMenu.css"

export default function SideMenu(){
    return(
        <div className="sidemenu">
            <div className="tablogo">
                <svg width="35.25" height="30" viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.46 13.9733C20.9724 13.9679 25.4862 13.96 29.9986 13.96C30.1267 13.96 30.2535 14.0199 30.3816 14.0532V19.551C30.0289 19.551 29.7824 19.551 29.5358 19.551C25.3402 19.551 21.1446 19.5483 16.949 19.5563C16.6873 19.5563 16.4256 19.6442 16.1638 19.6908C16.0743 19.4844 15.9118 19.2807 15.909 19.0729C15.887 17.567 15.8966 16.0597 15.8966 14.5538C15.8966 14.2556 15.8787 13.9466 16.3374 13.9786C16.3787 13.9786 16.4187 13.9759 16.46 13.9746V13.9733Z" fill="#784BD2"/>
                <path d="M32.3288 19.5628C32.2724 19.4043 32.1677 19.2459 32.1663 19.0861C32.1525 17.5549 32.1594 16.0237 32.1553 14.4924C32.1553 14.1982 32.1897 13.9465 32.5905 13.9758C32.6319 13.9758 32.6718 13.9731 32.7131 13.9718C37.2256 13.9665 41.738 13.9598 46.2504 13.9585C46.3785 13.9585 46.5052 14.0184 46.6333 14.0517C46.6292 15.4937 46.6361 16.9357 46.6154 18.3764C46.6099 18.7599 46.5218 19.142 46.4653 19.5615H32.3275L32.3288 19.5628Z" fill="#784BD2"/>
                <path d="M24.8737 33.0348C24.7883 32.8857 24.6299 32.7379 24.6285 32.5874C24.6106 30.9097 24.6175 29.232 24.6175 27.5077C24.8393 27.4611 25.0087 27.3945 25.1795 27.3945C29.8476 27.3972 34.5156 27.4052 39.1837 27.4132C39.192 27.4664 39.1989 27.5197 39.2071 27.5743C39.1617 29.3132 39.1176 31.0535 39.0708 32.863C38.7209 32.863 38.473 32.863 38.2264 32.863C34.0735 32.863 29.9206 32.8604 25.7677 32.8683C25.5046 32.8683 25.2415 32.9496 24.9798 32.9935C24.9426 33.0015 24.9081 33.0148 24.8765 33.0348H24.8737Z" fill="#784BD2"/>
                <path d="M32.281 26.243C32.2411 26.1405 32.1667 26.038 32.1667 25.9354C32.1626 24.295 32.1667 22.6546 32.1736 21.0129C32.1736 20.9516 32.219 20.8917 32.2714 20.7599C32.489 20.7466 32.7314 20.7199 32.9739 20.7199C37.332 20.7173 41.6902 20.7173 46.0497 20.7239C46.2921 20.7239 46.5345 20.7932 46.777 20.8291C46.726 21.0608 46.6337 21.2911 46.631 21.5228C46.6158 22.7638 46.631 24.0061 46.6172 25.247C46.6144 25.5187 46.5373 25.7903 46.4739 26.1911H32.7232C32.6364 26.1937 32.5496 26.1964 32.4628 26.1977L32.4243 26.2297C32.3761 26.2337 32.3292 26.2377 32.281 26.2417V26.243Z" fill="#784BD2"/>
                <path d="M15.9258 26.0808V20.808C16.1489 20.7734 16.3225 20.7228 16.496 20.7228C21.0553 20.7188 25.6159 20.7215 30.1752 20.7228C30.2895 20.7228 30.4038 20.7401 30.5182 20.7494C30.5113 20.7881 30.5085 20.8267 30.5071 20.8666C30.4631 21.0983 30.3845 21.3313 30.3818 21.563C30.3694 22.9145 30.3777 24.2659 30.3749 25.6174C30.3749 25.7839 30.3474 25.949 30.3391 26.0448C29.3391 26.0994 28.4066 26.1913 27.4727 26.1953C23.806 26.2086 20.1393 26.194 16.4726 26.1886C16.3748 26.2006 16.2756 26.2113 16.1778 26.2233C16.0952 26.1753 16.0112 26.1287 15.9285 26.0808H15.9258Z" fill="#784BD2"/>
                <path d="M8.48385 32.874L8.47559 27.5334C8.56512 27.4921 8.65465 27.4495 8.74418 27.4082C13.5114 27.4135 18.2787 27.4202 23.0459 27.4255C23.0418 27.4655 23.0542 27.5001 23.0859 27.5267C23.0721 27.564 23.0624 27.6026 23.0556 27.6425C22.6699 27.5986 22.8145 27.8849 22.8131 28.0407C22.8035 29.3921 22.809 30.7436 22.8049 32.0951C22.8049 32.3294 22.7842 32.5651 22.7704 32.8647C22.455 32.8647 22.2084 32.8647 21.9619 32.8647C17.8131 32.8647 13.6657 32.862 9.51691 32.87C9.25245 32.87 8.98799 32.9446 8.72352 32.9845C8.64363 32.9486 8.56374 32.9126 8.48385 32.8767V32.874Z" fill="#784BD2"/>
                <path d="M24.8575 39.6873C24.7763 39.4876 24.6261 39.2878 24.6234 39.0868C24.6069 37.5143 24.6165 35.9404 24.6234 34.3679C24.6234 34.3053 24.6592 34.2428 24.7005 34.1083C24.8947 34.087 25.1137 34.043 25.3314 34.043C29.7777 34.039 34.224 34.039 38.6703 34.043C38.8452 34.043 39.0215 34.1016 39.1965 34.1322C39.1965 35.9298 39.1965 37.7273 39.1965 39.5248H39.1978C38.9733 39.4836 38.7474 39.4436 38.5229 39.4037C34.3521 39.3997 30.1813 39.393 26.0091 39.3944C25.8589 39.3944 25.7102 39.4636 25.56 39.5009C25.4691 39.5009 25.3782 39.5009 25.2873 39.4995C25.2391 39.5022 25.1923 39.5035 25.144 39.5062L25.0297 39.6407L24.9994 39.666C24.9512 39.6726 24.9044 39.6793 24.8562 39.686L24.8575 39.6873Z" fill="#784BD2"/>
                <path d="M0.22647 20.7931C0.22647 22.5933 0.215538 24.3922 0.23069 26.1564H0.61628H14.0695C14.0902 25.8382 14.115 25.6291 14.115 25.4188C14.1191 24.1339 14.1109 22.8476 14.1232 21.5627C14.1246 21.3297 14.2045 21.098 14.2486 20.865C14.2513 20.8264 14.2555 20.7891 14.261 20.7505C14.1246 20.7412 13.9869 20.7212 13.8505 20.7212C9.47722 20.7199 5.10529 20.7172 0.731983 20.7199C0.579089 20.7199 0.427573 20.7625 0.22647 20.7931Z" fill="#784BD2"/>
                <path d="M41.0498 39.6405V34.2026H46.8722C46.8942 34.3997 46.9286 34.5715 46.9286 34.7419C46.9328 36.2691 46.9341 37.7964 46.9286 39.3223C46.9286 39.4954 46.8749 39.6685 46.8446 39.8416C44.9934 39.8349 43.1421 39.8282 41.2909 39.8216C41.211 39.7603 41.1297 39.7004 41.0498 39.6392V39.6405Z" fill="#DBDBDB"/>
                <path d="M6.88012 27.7107V33.1579H1.03711V27.5177C2.93932 27.4964 4.82914 27.4751 6.71896 27.4551C6.77268 27.5403 6.8264 27.6255 6.8815 27.7107H6.88012Z" fill="#DBDBDB"/>
                <path d="M46.8752 7.52344V13.1451H41.1631V7.52344H46.8752Z" fill="#DBDBDB"/>
                <path d="M41.2653 0.791504H46.87V6.50233H41.1221V0.911339C41.1703 0.871394 41.2171 0.831449 41.2653 0.791504Z" fill="#DBDBDB"/>
                <path d="M8.49454 19.6812C8.51107 18.0421 8.52898 16.403 8.54551 14.7652C8.54688 14.6148 8.54551 14.463 8.54551 14.2619C8.75212 14.2326 8.9243 14.1887 9.0951 14.1874C10.6543 14.182 12.2136 14.19 13.7728 14.1807C14.1557 14.1781 14.394 14.2753 14.3926 14.692C14.3858 16.2885 14.3871 17.8836 14.3802 19.4801C14.3802 19.5627 14.332 19.6452 14.2714 19.8396H8.60749C8.56892 19.7863 8.53173 19.7331 8.49316 19.6798L8.49454 19.6812Z" fill="#DBDBDB"/>
                <path d="M41.1445 32.9939V27.5601H46.8705V33.2123H41.4186C41.3277 33.1391 41.2354 33.0672 41.1445 32.9939Z" fill="#DBDBDB"/>
                </svg>
            </div>
            <div className="tablogo">
                <svg width="32.25" height="37.5" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.8251 36.5751C22.5528 34.8323 20.7464 32.5904 19.5568 30.0368C18.9609 28.7354 16.423 23.1306 19.1607 18.2404C19.8918 16.9798 20.8711 15.869 22.0437 14.9703C24.7687 12.8686 26.4346 13.5692 29.6737 11.9928C30.5983 11.5444 35.8085 9.01523 35.9938 5.04106C36.0992 2.77814 34.5405 0.965341 33.6521 0.100098C34.9626 0.498146 36.1658 1.16971 37.1764 2.06703C37.518 2.37179 38.8605 3.59084 39.4727 5.26525C41.1222 9.78064 36.4026 14.7339 36.0411 15.1034C35.2526 15.9091 33.5359 17.0126 30.1024 19.2177C26.2875 21.6698 25.8751 21.6698 25.0576 22.6857C22.8776 25.4093 23.0592 28.858 23.1464 30.4869C23.2675 32.6057 23.8388 34.678 24.8251 36.5751Z" fill="#4B86C0"/>
                <path d="M1.54086 34.5189C1.30106 33.9847 -0.275796 30.3486 1.58627 27.4533C2.7998 25.5653 5.00522 24.7175 6.7347 24.0537C7.34507 23.8207 8.16439 23.777 9.33792 23.2935C10.215 22.9269 11.0524 22.4775 11.8377 21.9519C12.4481 21.5469 13.0329 21.1071 13.5889 20.6348C15.7508 18.7572 17.2531 15.5922 17.5002 15.065C19.2841 11.245 19.9835 7.49852 20.2833 5.00439C20.8568 5.70757 21.2406 6.53677 21.4005 7.41793C21.5121 8.10304 21.4806 8.80272 21.3079 9.47594C20.5994 12.4535 18.0379 18.3981 17.1296 21.8188C16.55 24.0186 15.5055 27.9876 17.3112 31.8356C18.5048 34.3753 20.3669 35.9604 22.9701 38.0955C26.7851 41.2341 28.9996 41.5984 30.8235 44.506C31.7007 45.937 32.2489 47.533 32.4313 49.186C31.2373 48.132 29.9311 47.2027 28.5345 46.4133C25.9912 44.9806 22.8702 43.2134 19.3695 43.7353C17.6709 43.9875 17.4275 44.5515 14.4355 45.0717C11.903 45.5131 10.9003 45.3152 10.3535 45.161C8.59132 44.6671 7.4886 43.4901 6.96721 42.8368C7.53943 43.1388 8.17164 43.3203 8.82201 43.3692C11.002 43.5216 12.8913 42.0451 13.7851 40.7753C16.0668 37.5367 13.8305 32.806 11.7868 30.4904C11.0601 29.6742 10.0228 28.5218 8.30787 28.2538C6.21512 27.928 4.56559 29.1436 4.12959 29.4623C1.74614 31.2278 1.56266 34.0478 1.54086 34.5189Z" fill="#CF432A"/>
                <path d="M8.92735 21.5671C11.1033 21.5671 12.8673 19.8619 12.8673 17.7584C12.8673 15.6549 11.1033 13.9497 8.92735 13.9497C6.75134 13.9497 4.9873 15.6549 4.9873 17.7584C4.9873 19.8619 6.75134 21.5671 8.92735 21.5671Z" fill="#CF432A"/>
                <path d="M30.1579 20.6099C29.4313 21.2194 24.083 25.8118 24.8242 31.8352C25.2129 34.9879 27.1186 37.2982 28.4412 38.9008C30.34 41.1859 32.7298 43.0473 35.4462 44.3567C34.0282 42.0459 33.1411 39.4687 32.8447 36.799C32.4736 33.2464 33.1486 29.6648 34.7922 26.4651C33.3718 26.8193 32.1148 27.6207 31.2206 28.7421C30.2078 30.0667 29.7599 31.7152 29.9689 33.3485C29.114 32.321 28.4853 31.1362 28.1214 29.8665C26.8098 25.2513 29.6565 21.2859 30.1579 20.6099Z" fill="#DA7B31"/>
                <path d="M21.7168 4.02002C22.2917 4.8842 22.6563 5.86264 22.7832 6.88196C22.8158 7.16398 22.8813 7.89084 22.3671 10.4603C22.1437 11.5708 21.9239 12.478 21.764 13.098C22.3002 12.5446 22.9113 12.0633 23.5807 11.6671C25.3446 10.6162 26.8833 10.5584 28.1732 10.2817C29.5847 9.97861 31.5431 9.23073 33.7394 7.23927C32.983 7.48051 32.207 7.66038 31.4195 7.777C30.4207 7.91866 29.4146 8.00809 28.4057 8.04498C27.63 8.066 27.1195 8.04498 26.4565 8.31297C26.0638 8.47599 25.703 8.70291 25.3901 8.98376C25.52 8.2317 25.4404 7.45978 25.1593 6.74709C24.3073 4.66107 21.9875 4.08307 21.7168 4.02002Z" fill="#FCF250"/>
                <path d="M30.622 22.8925C30.5492 22.0451 30.7261 21.1951 31.1325 20.4404C31.2706 20.1952 31.7447 19.407 33.5904 18.2948C34.4706 17.7613 35.4028 17.3119 36.3736 16.9532C37.9032 16.3945 39.8252 14.2611 41.6146 7.42676L42.3104 8.00827C40.2394 16.5906 38.1678 25.1741 36.0956 33.7588C37.1295 33.921 38.1224 34.2699 39.0222 34.787C39.6599 35.1565 41.0968 36.013 41.8035 37.6489C42.0342 38.1744 42.2341 38.642 42.0833 39.1692C41.7908 40.1921 40.3465 40.8927 39.1603 40.8244C36.8531 40.6913 35.2527 37.6366 34.9402 35.8606C34.8122 35.0524 34.7629 34.2344 34.793 33.4173C34.8549 32.8166 34.9766 32.223 35.1564 31.6448C36.2609 27.5901 36.5752 26.2361 36.7569 24.7701C36.8059 24.3726 36.8332 24.052 36.8495 23.8751C36.1416 24.3115 35.3545 24.6152 34.5296 24.7701C33.5559 24.9453 33.4396 24.7386 32.7675 24.9032C30.8527 25.3692 29.8608 27.4797 29.6628 27.9053C29.365 28.5407 29.1766 29.2187 29.1051 29.9126C28.6803 29.3023 28.4388 28.5906 28.4075 27.8563C28.3403 25.4147 30.929 23.185 33.278 22.4897C34.2989 22.1867 34.6059 22.3723 35.458 21.9519C36.9404 21.2216 37.7197 19.8169 38.1466 18.7327C37.3604 19.1573 36.5381 19.5164 35.6887 19.8064C34.3189 20.2758 33.7485 20.2688 32.9056 20.6996C32.2625 21.0254 31.4014 21.6367 30.622 22.8925Z" fill="#59A657"/>
                </svg>
            </div>
            <div className="tablogo">
                <img src="/Logo.png" alt="bosm" className="bosmlogo" />
            </div>
            <div className="tablogo tabDvmLogo">
                <svg width="21.1125" height="27" viewBox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5.57593V27.8794L15.6112 39.0296L30.2941 27.8794V5.5774L16.2619 16.2635L8.17724 10.7802L8.08471 16.0769L16.1694 21.2812L26.3913 13.7532V25.0914L15.7052 33.3612L5.29677 26.0212L5.11169 8.27132L0 5.57593Z" fill="white"/>
                <path d="M0.448006 31.6367L15.222 41.9996L32.0539 29.3629V3.36373L36.7998 0V31.2724L14.5948 48L0 37.3653V31.7278L0.448006 31.6367Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}