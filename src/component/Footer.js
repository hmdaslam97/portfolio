import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../styles/Footer.css"

function Footer() {
    const Email=(mailId)=>{
        return (
            <a href={`mailto:${mailId}`}>
                <ForwardToInboxIcon sx={{ color: "red", }} />
            </a>
        );
    }
    const sendMessage = (phoneNumber) => {
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`,'_blank');
    }

    const openInstaProfile=(instaId)=>{
        window.open(`https://www.instagram.com/${instaId}`, '_blank')
    }

  return (
    <div className="footer">
        <div className="socialMedia">
            <a target="_blank">{Email("hmdaslam97@gmail.com")}</a>
              <a href="https://www.linkedin.com/in/mohammed-aslam-759061170" target="_blank"><LinkedInIcon sx={{  color: "darkblue", }}/></a>
              <a onClick={()=>sendMessage('7975135080')} ><WhatsAppIcon id="whats" sx={{ color: "darkgreen",  }} /></a>
              <a href="https://github.com/hmdaslam97" target="_blank" ><GitHubIcon sx={{  color: "black",  }} /></a>
              <a onClick={()=>openInstaProfile("hmdaslam97")} target="_blank" ><InstagramIcon sx={{ color: "orange",  }} /></a >
        </div>
        <h3>&copy; Mohammed Aslam 2023</h3>
    </div>
  )
}

export default Footer