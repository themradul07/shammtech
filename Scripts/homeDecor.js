let gridctn = document.querySelector('.category-list');
const gridelems = [
  {
    title: "Furnitures",
    icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_furnitures.png?w=96&q=75",
    href: "/Varanasi/Furnitures-in-Kateshar/fil-297-12789",
    alt: "Furnitures"
  },
  {
    title: "Furnishing",
    icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_furnishing.png?w=96&q=75",
    href: "/Varanasi/Furnishing-in-Kateshar/fil-297-12893",
    alt: "Furnishing"
  },
  {
    title: "Lamps & Lighting",
    icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_lampslighting.png?w=96&q=75",
    href: "/Varanasi/Lamps-Lighting-in-Kateshar/fil-297-15334",
    alt: "Lamps & Lighting"
  },
  {
    title: "Kitchen & Dining",
    icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_kitchendining.png?w=96&q=75",
    href: "/Varanasi/Kitchen-Dining-in-Kateshar/fil-297-12895",
    alt: "Kitchen & Dining"
  },
  {
    title: "Interior Designers",
    icon: "https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_interiordesigners.png?w=96&q=75",
    href: "/Varanasi/Interior-Designers-in-Kateshar/nct-10272436",
    alt: "Interior Designers"
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