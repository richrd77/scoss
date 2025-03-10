import { Component } from '@angular/core';

@Component({
  selector: 'scoss-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})


export class HomePageComponent {

  

  theme:string = 'light'
  isDark:boolean = false;

  changeTheme(){
    this.isDark = !this.isDark;
    if(this.isDark){
      this.theme = 'dark'
    }
    else{
      this.theme = 'light'
    }
  }


servicesData:any[] = [
  {
    title : 'Website Design and Development ',
    iconURL:'https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg',
    description:' Modern, responsive websites crafted to elevate your digital presence ',
    features:' Key features: Custom design, mobile optimization, SEO-friendly development, E-commerce solutions',
    buttonName:'Start Your Project →'

  },
  {
    title : 'Digital Marketing Services ',
    iconURL:'https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA=',
    description:'Results-driven digital marketing strategies to boost your online presence and growth ',
    features:' Key features: SEO, social media marketing, PPC campaigns, content marketing',
    buttonName:'Grow Your Business →'

  },
  {
    title : 'Custom Software Development',
    iconURL:'https://i0.wp.com/eastgate-software.com/wp-content/uploads/2024/05/Custom-Software-Development-1024x538-1.webp?fit=1024%2C538&ssl=1',
    description:'Custom software solutions tailored to your business needs',
    features:'Key features: Web, mobile, desktop applications',
    buttonName:'Learn More →'

  },
  {
    title : 'Cloud Solutions',
    iconURL:'https://cdn.prod.website-files.com/6596c410e822459a2067a060/663ac8ec8849e047a8909ea7_269jW1nFBAnpEucuKgU_ECP7WqdA8ZjQA02KlmB1i60jMKq-Iw99t0fC-PzLeCTp6fqIJ28IaxwoImK3jBqnFwD-n1AmYz_5Rgee1GJrDWs0SFsSWieh7-_2IOQeyKQSrJ3JbjvDamhOWxcIu2JMad0.jpeg',
    description:'Secure and scalable cloud infrastructure services',
    features:'Key features: Migration, optimization, management',
    buttonName:'Explore Cloud Services →'

  },
  {
    title : 'Cybersecurity Services',
    iconURL:'https://etimg.etb2bimg.com/photo/88428872.cms',
    description:'Comprehensive security solutions for your digital assets',
    features:'Key features: Assessment, implementation, monitoring',
    buttonName:'View Security Solutions →'

  },
  {
    title : 'IT Consulting',
    iconURL:'https://www.cloudavize.com/wp-content/uploads/2023/01/dallas-it-consulting.jpg',
    description:'Strategic technology consulting for business growth',
    features:'Key features: Digital transformation, IT strategy, roadmap',
    buttonName:'Get Expert Advice →'

  },
  {
    title : 'Network Solutions',
    iconURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcY4xs70HAYtvfgJRGunRfsAMWnu1_kG8-tg&s',
    description:'Reliable network infrastructure and management',
    features:'Key features: Design, implementation, support',
    buttonName:'Discover Networks →'

  },
  {
    title : 'Technical Support',
    iconURL:'https://t4.ftcdn.net/jpg/03/96/03/43/360_F_396034321_UZUYmdaV0ue9urxUqj6uJsAtkjutmIM7.jpg',
    description:'24/7 technical support and maintenance services',
    features:'Key features: Issue resolution, maintenance, monitoring',
    buttonName:'View Support Plans →'

  }
];

}
