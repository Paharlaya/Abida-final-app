import React from 'react'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiYoutube} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
   <div className="header__socials">
        <a href="https://www.facebook.com/profile.php?id=100063616154598" target='_blank'><FiFacebook/></a>
        <a href="https://instagram.com/abida_the_worshippers?igshid=YmMyMTA2M2Y=" target='_blank'><AiOutlineInstagram/></a>
        <a href="https://youtube.com/channel/UCJmG_QUejx3tiFt2igt6jZA" target='_blank'><FiYoutube/></a>
   </div>
  )
}

export default HeaderSocials