// cardData.ts

export interface LoanData {
    id:number;
    titleImage: string;
    title: string;
    descriptionImage:string;
    description:string;
    loanTypes: string[];
    eligibility:string;
  }
  
  export const loanData: LoanData[] = [
    {
      id:1,
      titleImage: "/images/looking1.png",
      title: "Personal Loan",
      descriptionImage:"/images/kisan.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab architecto molestiae quis dolore doloremque quae tempora, eveniet ea officia.",
      loanTypes: ["Secured loans", "Unsecured loans", "Revolving credit facilities", "Business cash advances"],
      eligibility:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quibusdam."
    },
    {
      id:2,
      titleImage: "/images/looking1.png",
      title: "Business Loan",
      descriptionImage:"/images/kisan.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab architecto molestiae quis dolore doloremque quae tempora, eveniet ea officia.",
      loanTypes: ["Business Secured loans", "Unsecured loans", "Revolving credit facilities", "Business cash advances"],
      eligibility:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quibusdam."
    },
    {
      id:3,
      titleImage: "/images/looking1.png",
      title: "Education Loan",
      descriptionImage:"/images/kisan.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab architecto molestiae quis dolore doloremque quae tempora, eveniet ea officia.",
      loanTypes: ["Secured loans", "Unsecured loans", "Revolving credit facilities", "Business cash advances"],
      eligibility:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quibusdam."
    },
    {
      id:4,
      titleImage: "/images/looking1.png",
      title: "House Loan",
      descriptionImage:"/images/kisan.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab architecto molestiae quis dolore doloremque quae tempora, eveniet ea officia.",
      loanTypes: ["Secured loans", "Unsecured loans", "Revolving credit facilities", "Business cash advances"],
      eligibility:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quibusdam."
    },
    {
      id:5,
      titleImage: "/images/looking1.png",
      title: "Payday Loan",
      descriptionImage:"/images/kisan.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab architecto molestiae quis dolore doloremque quae tempora, eveniet ea officia.",
      loanTypes: ["Secured loans", "Unsecured loans", "Revolving credit facilities", "Business cash advances"],
      eligibility:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quibusdam."
    },
    {
      id:6,
      titleImage: "/images/looking1.png",
      title: "Agricultural Loan",
      descriptionImage:"/images/kisan.png",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ab architecto molestiae quis dolore doloremque quae tempora, eveniet ea officia.",
      loanTypes: ["Secured loans", "Unsecured loans", "Revolving credit facilities", "Business cash advances"],
      eligibility:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quibusdam."
    },
  ];
  