let gridctn = document.querySelector('.category-list');
const gridelems = [
    {
        title: "Beauty Parlours",
        icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_beautyparlours.png?w=96&q=75",
        href: "/",
        alt: "Beauty Parlours"
    },
    {
        title: "Beauty Services",
        icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_beautyservices.png?w=96&q=75",
        href: "/",
        alt: "Beauty Services"
    },
    {
        title: "Bridal Makeup",
        icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_bridalmakeup.png?w=96&q=75",
        href: "/",
        alt: "Bridal Makeup"
    },
    {
        title: "Bridegroom Makeup",
        icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_bridegroommakeup.png?w=96&q=75",
        href: "/",
        alt: "Bridegroom Makeup"
    },
    {
        title: "Salons",
        icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_salons.png?w=96&q=75",
        href: "/",
        alt: "Salons"
    },
    {
        title: "Spas",
        icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_spas.png?w=96&q=75",
        href: "/",
        alt: "Spas"
    }
];
gridctn.innerHTML = gridelems.map((elem, i) => `
    <li class="category-item ${i % 2 == 0 ? 'gray' :''}">
        <a href="${elem.href}" >
        <img src="${elem.icon}"
                            alt="${elem.alt}" />
                        <span>${elem.title}</span>
                    </a>
                </li>`).join('');