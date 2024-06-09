type User = {
    name?: string;
    phone?: number;
    address?: string;
}

/* 
Required
Partial
Record -> object inside object
*/

const user1: Required<User> = {
    name: "abinash",
    phone: 9811,
    address: "hlo"
}

const user2: Partial<User> = {
    name: "abinash",
    phone: 9811,
    address: "hlo"
}

// console.log(user1);
// console.log(user2);


type PageInfo = {
    title: string;
    id: number
};

type Pages = 'home' | 'about' | 'contact';

const websitePages: Record<Pages, PageInfo> = {
    home: { title: 'Home Page', id:12 },
    about: { title: 'About Us', id:23 },
    contact: { title: 'Contact Us', id:34 },
};