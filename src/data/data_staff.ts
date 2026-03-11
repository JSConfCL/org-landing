export interface StaffMember {
  id: string;
  fullName: string;
  linkedin?: string;
  website?: string;
  instagram?: string;
  email?: string;
  date: string;
  role: string;
  imageUrl: string;
  isExStaff: boolean;
}

export const DATA_STAFF: StaffMember[] = [
  // Ex Staff
  {
    id: '1',
    fullName: 'Felipe Torres',
    linkedin: '#',
    date: '2021 - 2025',
    role: 'Staff',
    imageUrl:
      'https://images.ctfassets.net/1kfhsqlc8ewi/YuqGoARq0hYmpBhwniMWM/e84bfeb2f1300141c8c0edb057762dc8/orador7.jfif?fm=webp',
    isExStaff: true,
  },
  {
    id: '2',
    fullName: 'Pillippa Pérez',
    linkedin: '#',
    date: '2021 - 2025',
    role: 'Staff',
    imageUrl:
      'https://images.ctfassets.net/1kfhsqlc8ewi/4JBzrUmH0Szm26QAbJc0oS/e09599d38e5a5f35a3260f8e36d7f153/1651333822799.jpeg?fm=webp',
    isExStaff: true,
  },
  {
    id: '3',
    fullName: 'José Lezama',
    linkedin: '#',
    date: '2021 - 2025',
    role: 'Staff',
    imageUrl:
      'https://images.ctfassets.net/1kfhsqlc8ewi/22P8iUNzQ0oQQCNRS35PfO/74bd811c67efa0ba63654d9911df8f42/1538169655669.jpeg?fm=webp',
    isExStaff: true,
  },
  {
    id: '4',
    fullName: 'Francisco Cordero',
    linkedin: '#',
    date: '2021 - 2025',
    role: 'Staff',
    imageUrl:
      'https://images.ctfassets.net/1kfhsqlc8ewi/4Jmvken6n1z12JwlY97d91/6b92dd6a0d2f9b35ef9fdea595bae414/profile-pic.jpeg?fm=webp',
    isExStaff: true,
  },
  {
    id: '5',
    fullName: 'Leslie Herrera',
    linkedin: '#',
    date: '2021 - 2025',
    role: 'Staff',
    imageUrl:
      'https://images.ctfassets.net/1kfhsqlc8ewi/3Ke2I6VkZh0FiEPkkyjagN/32a4ae2ce8ad8e516990f51478d7ca4e/foto-leslie.jpeg?fm=webp',
    isExStaff: true,
  },
  {
    id: '6',
    fullName: 'Cecilia Geraldo',
    linkedin: 'https://www.linkedin.com/in/ceciliageraldo/',
    date: '2023 - 2025',
    role: 'Staff',
    imageUrl: '/assets/staff/staff-cecilia-geraldo.jpeg',
    isExStaff: true,
  },
  // Actuales Staff
  {
    id: '7',
    fullName: 'Ricardo Castillo',
    linkedin: '#',
    date: '2023 - Presente',
    role: 'Staff',
    imageUrl:
      'https://images.ctfassets.net/1kfhsqlc8ewi/19Z63BSGRvkB44joLGM0Ph/a6ab11ef6f5f8552b97a90db01ac389e/bio.JPG?fm=webp',
    isExStaff: false,
  },
  {
    id: '8',
    fullName: 'Fabián Arismendi',
    linkedin: 'https://www.linkedin.com/in/fabianko',
    website: 'https://fabianko.com/',
    instagram: 'https://www.instagram.com/fabianko',
    email: 'fabianko@jschile.org',
    date: '2023 - Presente',
    role: 'Staff',
    imageUrl:
      'https://images.ctfassets.net/1kfhsqlc8ewi/7jB5XDgpFc94zK4kJVWC53/3ff4066c047f026c617eb296c5039208/foto-fabian-arismendi.jpg?fm=webp',
    isExStaff: false,
  },
  {
    id: '9',
    fullName: 'Armando Rivas',
    linkedin: 'https://www.linkedin.com/in/armandorivasv/',
    website: 'https://www.armandorivasv.dev/',
    email: 'armandor@jschile.org',
    date: '2026 - Presente',
    role: 'Staff',
    imageUrl: '/assets/staff/staff-armando-rivas-dev.jpg',
    isExStaff: false,
  },
  {
    id: '10',
    fullName: 'Samuel Angulo',
    linkedin: 'https://www.linkedin.com/in/samuel-angulo/',
    email: 'samuel@jschile.org',
    date: '2026 - Presente',
    role: 'Staff',
    imageUrl: '/assets/staff/staff-samuel-angulo.jpeg',
    isExStaff: false,
  },
  {
    id: '11',
    fullName: 'Mapachito',
    linkedin: 'https://cl.linkedin.com/in/konstanzabosch',
    date: '2026 - Presente',
    role: 'Staff',
    imageUrl: '/assets/staff/staff-mapachito.jpeg',
    isExStaff: false,
  },
  {
    id: '12',
    fullName: 'Carlos Romero',
    linkedin: 'https://www.instagram.com/cxrlosarmando/',
    date: '2026 - Presente',
    role: 'Staff',
    imageUrl: '/assets/staff/staff-carlos-romero.jpeg',
    isExStaff: false,
  },
  {
    id: '13',
    fullName: 'Javier Vargas',
    linkedin: 'https://www.linkedin.com/in/javierdvt/',
    date: '2026 - Presente',
    role: 'Staff',
    imageUrl: '/assets/staff/staff-javier-vargas.png',
    isExStaff: false,
  },
];
