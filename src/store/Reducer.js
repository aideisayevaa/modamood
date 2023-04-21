const localBasket = localStorage.getItem("basket");
// const localProducts = localStorage.getItem("products");
const localMessages = localStorage.getItem("messages");
const localFavorite = localStorage.getItem("favorite");
const localUsers = localStorage.getItem("users");
const localSingleUser = localStorage.getItem("singleuser");
// const localActiveUser = localStorage.getItem("activeUser");
const localLang = localStorage.getItem("lang");
const initialState = {
    // users: [

    // ],
    products: [],
    categories: [

    ],
    subcategories: [

    ],
    t: {
        en: {
            home: "Home",
            shop: "Shop",
            about: "About",
            faqs: "Faqs",
            contact: "Contact",
            learnMore: "Learn More",
            shopNow: "Shop Now",
            forWoman: "For Woman",
            forMan: "For Man",
            bagShop: "Bag Shop",
            forKid: "For Kid",
            shoesShop: "Shoes Shop",
            all: "All",
            popular: "Popular",
            brand: "Brand",
            sale: "Sale",
            instagramGallery: "Instagram Gallery",
            searchProducts: "Search Products",
            categories: "Categories",
            kid: "Kid",
            kids: "Kid",
            woman: "Woman",
            men: "Men",
            shoes: "Shoes",
            bag: "Bag",
            color: "Color",
            filterByPrice: "Filter By Price",
            size: "Size",
            showing: "Showing",
            results: "Results",
            fromCheapToExpensive: "From Cheap To Expensive",
            fromExpensiveToCheap: "From Expensive To Cheap",
            a_z: "A - Z",
            z_a: "Z - A",
            availability: "Availability",
            price: "Price",
            inStock: "In Stock",
            addBasket: "Add to basket",
            notStock: "Not Stock",
            share: "Share",
            subcategory: "Subcategory",
            category: "Category",
            aboutTitle: "Everything is one click away: easy, fast and safe shopping!",
            aboutDesc: "Our shopping store is in front of you with a modern and fun platform for our customers to make comfortable and quality purchases. We have many different categories to choose from. Our shopping store is the best alternative for your shopping experience. By coming to us, you will always stay with us for quality products, best services and cheapest prices. We believe that we can provide you with a profitable and reliable shopping experience. We always take the wishes of our customers as the basis and protect their information.",
            freeShipping: "Free Shipping",
            freeShippingDesc: "ALL ORDER OVER 10 AZN",
            supportCustomer: "Support Customer",
            supportCustomerDesc: "SUPPORT 24/7",
            securePayments: "Secure Payments",
            securePaymentsDesc: "Safety protection",
            testimonial1: "I recently bought a pair of shoes from this store. I was impressed with the speedy service. The shoes are comfortable and of good quality. I will definitely shop here again!",
            testimonial2: "The store has a great selection of products and I was able to find exactly what I was looking for. The prices were reasonable and the customer service was excellent. I recommend this store to anyone looking for a great shopping experience.",
            testimonial3: "I have been a regular customer of this store for a long time and I am always impressed by the variety and quality of products. The staff are always friendly and helpful and I appreciate their service to ensure the best shopping experience possible.",
            testimonial4: "I needed a new dress for a special day and I was so happy to find it at this store. I was able to find the perfect material at a low price. I will definitely be back shopping again soon!",
            testimonialUser1: "Nİgar Abbasova",
            testimonialUser2: "Vusal Guliyev",
            testimonialUser3: "Emin Hajiyev",
            testimonialUser4: "Gunel Safarova",
            testimonialUserStatus: "Website user",
            sendUsMesssage: "Send Us a Message",
            name: "Name",
            email: "Email",
            surname: "Surname",
            phone: "Phone",
            password: "Password",
            passwordAgain: "Password Again",
            submit: "Submit",
            message: "Message",
            address: "Address",
            total: "Total",
            goBasket: "Go Basket",
            productName: "Product Name",
            quantity: "Quantity",
            favorites: "FAVORITES",
            instagram: "Instagram",
            facebook: "Facebook",
            twitter: "Twitter",
            basket: "Basket",
            azn: "AZN",
            msale: "#modamoodsales",
            welcomeBack: "Welcome Back!",
            welcomeToWbesite: "Welcome To Website!",
            welcomeBackSub: "You can shop more easily by logging into your account.",
            welcomeToWebsiteSub: "Don't have an account? Register now!",
            login: "Login",
            signUp: "Sign Up",
            register: "Register",
            oops: "Oops",
            pageNotFound: "Page not found",
            goBackToHomePage: "Go to home page",
            footerLocation: "59 Street, Newyork City, Rose Town, 05 Rive House",
            aboutWebsite: "About Website",
            location: "Location",
            instagramPosts: "Instagram Posts",
            socials: "Socials",
            payments: "Payments",
            readMore: "Read More...",
            blogs: "Blogs",
            standart: "Standart",
            xl: "Extra Large (XL)",
            l: "Large (L)",
            m: "Medium (M)",
            s: "Small (S)",
            xs: "Extra Small (XS)",
            apply: "Apply",
            clearFilter: "Clear Filter",
            locationStore: "Samad Vurgun 25 on 28 May",
            similarProducts: "Similar products",
            comments: "Comments",
            rating: "Rating",
            signinAcc: "Sign in account",
            signoutAcc: "Sign out",
            writeYourComment: "Write your thoughts about the product...",
            productNotAdded: "Product not added...",
            removeProducts: "Remove products",
            pay: "Pay",
            noResultFilter: "No search results were found",
            city: "City",
            confirmInformation: "Confirm the information",
            contactInformation: "Delivery information",
            cardInfo: "Card Information",
            cardNumber: "Card Number",
            cardhilderName: "Cardholder Name",
            dateEx: "Expiration Date(MM / YY)",
            securityCode: "Security Code",
            confirmPay: "Confirm payment",
            swalQues: "Product will be deleted",
            swalRemove: "Product removed",
            swalNotRemove: "Product not removed",
            swalBasketRemove: "All items in the basket will be removed",
            swalBasketRemoveTrue: "Products removed",
            swalBasketRemoveFalse: "Products not removed",
            swalFavoriteRemove: "Product will be removed from favorites",
            swalMessagesend: "Send message?",
             swalMessagesendYes: "Message sent",
             swalMessagesendNo: "Message not sent",
            yes: "Yes",
            no: "No",
            desc: "Description",
            showAllBlogs: "Show All Blogs",
            desc1:"A maximum of 10 units of this product can be ordered. The store reserves the right to cancel orders over 10 units.",
            desc2:"More than 10 units of stock are offered for sale at the campaign price.",
            desc3:"The selling price of the product you have reviewed is determined by the seller.",

        },
        az: {
            home: "Ana Səhİfə",
            shop: "Mağaza",
            about: "Haqqımızda",
            faqs: "Sual - Cavab",
            contact: "Əlaqə",
            learnMore: "Ətraflı Məlumat",
            shopNow: "Alışverİşə başla",
            forWoman: "Qadınlar üçün",
            forMan: "Kİşİlər üçün",
            bagShop: "Çantalar",
            forKid: "Uşaqlar üçün",
            shoesShop: "Ayaqqabılar",
            all: "Hamısı",
            popular: "Ən çox satılanlar",
            brand: "Brend",
            sale: "Endirim",
            instagramGallery: "İnstagram Qalereya",
            searchProducts: "Məhsul axtarışı",
            categories: "Kateqoriya",
            kid: "Uşaqlar üçün ",
            kids: "Uşaqlar üçün ",
            woman: "Qadınlar üçün ",
            men: "Kişilər üçün ",
            shoes: "Ayaqqabılar",
            bag: "Çantalar",
            color: "Rəng",
            filterByPrice: "Qiymətə görə filterləmə",
            size: "Ölçü",
            showing: "Göstərilir :",
            results: "Nəticə",
            fromCheapToExpensive: "Ucuzdan Bahaya",
            fromExpensiveToCheap: "Bahadan Ucuza",
            a_z: "A - Z",
            z_a: "Z - A",
            availability: "Mövcudluq",
            price: "Qiymət",
            addBasket: "Səbətə əlavə et",
            share: "Paylaş",
            basket: "Səbət",
            inStock: "Mövcuddur",
            notStock: "Mövcud deyil",
            subcategory: "Altkateqoriya",
            category: "Kateqoriya",
            aboutTitle: "Hər şey tek bir klik uzağınızda: asan, sürətli və təhlükəsiz alışveriş!",
            aboutDesc: "Alış veriş mağazamız, müştərilərimizin rahat və keyfiyyətli alış veriş etməkləri üçün müasir və əyləncəli bir platforma ilə qarşınızdadır. Biz birçox fərqli kateqoriyalardan ibarət seçimlərə sahibik.Bizim alış veriş mağazamız sizin alış veriş təcrübəniz üçün ən yaxşı alternativdir. Bizə gələrək, siz daima keyfiyyətli məhsullar, ən yaxşı xidmətlər və ən ucuz qiymətlər üçün bizimlə qalacaqsınız.Biz sizə sərfəli və etibarlı alış veriş təcrübəsi təmin edə biləcəyimizə inanırıq. Hər zaman müştərilərimizin istəklərini əsas alırıq və onların məlumatlarını qoruyuruq.",
            freeShipping: "Pulsuz çatdırılma",
            freeShippingDesc: "10  AZN-dən yuxarı bütün sifarişlər",
            supportCustomer: "Dəstək Xidməti",
            supportCustomerDesc: "7/24 Xidmət",
            securePayments: "Təhlükəsiz Ödənişlər",
            securePaymentsDesc: "Təhlükəsizliyin qorunması",
            testimonial1: "Bu yaxınlarda bu mağazadan bir cüt ayaqqabı aldım. Sürətli xidmətə heyran oldum. Ayaqqabılar rahat və keyfiyyətlidir. Mən mütləq buradan yenidən alış-veriş edəcəyəm!",
            testimonial2: "Mağazada çoxlu məhsul seçimi var və mən axtardığımı tam olaraq tapa bildim. Qiymətlər münasib idi və müştəri xidməti əla idi. Bu mağazanı əla alış-veriş təcrübəsi axtaran hər kəsə tövsiyə edirəm.",
            testimonial3: "Uzun zamandır ki, bu mağazanın daimi müştərisiyəm və məhsulların müxtəlifliyi və keyfiyyəti məni həmişə heyran edir. Heyət həmişə mehriban və yardımseverdir və mən mümkün olan ən yaxşı alış-veriş təcrübəsini təmin etmək üçün onların xidmətini yüksək qiymətləndirirəm.",
            testimonial4: "Özəl bir gün üçün yeni paltara ehtiyacım var idi və bu mağazada tapdığım üçün çox sevindim. Aşağı qiymətə mükəmməl materialı tapa bildim. Mən mütləq tezliklə yenidən alış-verişə qayıdacağam!",
            sendUsMesssage: "Bizə mesaj göndərin",
            testimonialUser1: "Nİgar Abbasova",
            testimonialUser2: "Vüsal Qulİyev",
            testimonialUser3: "Emİn Hacıyev",
            testimonialUser4: "Günel Səfərova",
            testimonialUserStatus: "Vebsayt istifadəçisi",
            name: "Ad",
            email: "Email",
            surname: "Soyad",
            phone: "Telefon",
            submit: "Təsdİqlə",
            message: "Mesaj",
            address: "Ünvan",
            password: "Şifrə",
            passwordAgain: "Şifrə təkrar",
            total: "Ümumİ Məbləğ",
            goBasket: "Səbətə get",
            productName: "Məhsul adı",
            quantity: "Mİqdarı",
            favorites: "BƏYƏNİLƏNLƏR",
            instagram: "Instagram",
            facebook: "Facebook",
            twitter: "Twitter",
            azn: "AZN",
            msale: "#modamoodendİrİmlərİ",
            welcomeBack: "Yenidən Xoş Gəlmisiniz!",
            welcomeToWbesite: "Vebsayta Xoş Gəlmisiniz!",
            welcomeBackSub: "Hesabına daxil olaraq daha rahat şəkildə alış-veriş edə bilərsən.",
            welcomeToWebsiteSub: "Hesabın yoxdur? Elə isə indi qeydiyyatdan keç!",
            login: "Daxil ol",
            signUp: "Qeydiyyatdan keç",
            register: "Qeydiyyat",
            oops: "Oops",
            pageNotFound: "Səhifə tapılmadı",
            goBackToHomePage: "Ana səhifəyə keçin",
            footerLocation: " Newyork Şəhəri, Rose Küçəsi",
            aboutWebsite: "ModaMood",
            location: "Məkan",
            instagramPosts: "İnstagram paylaşımları",
            socials: "Sosial media",
            payments: "Ödənişlər",
            readMore: "Ətraflı oxu...",
            blogs: "Bloqlar",
            standart: "Standart",
            xl: "Extra Large (XL)",
            l: "Large (L)",
            m: "Medium (M)",
            s: "Small (S)",
            xs: "Extra Small (XS)",
            apply: "Tətbiq et",
            clearFilter: "Filtrləri təmizləyin",
            locationStore: "28 may, Səməd Vurğun 25 ",
            similarProducts: "Oxşar məhsullar",
            comments: "Rəylər",
            rating: "Reytinq",
            signinAcc: "Hesaba daxil olun",
            signoutAcc: "Hesabdan çıxın",
            writeYourComment: "Məhsul haqqında rəylərinizi yazın...",
            productNotAdded: "Məhsul əlavə edilməyib...",
            removeProducts: "Məhsulları sil",
            pay: "Ödəniş et",
            noResultFilter: "Axtarışa uyğun nəticə tapılmadı",
            city: "Şəhər",
            confirmInformation: "Məlumatları təsdiqlə",
            contactInformation: "Çatdırılma məlumatları",
            cardInfo: "Kart məlumatları",
            cardNumber: "Kart nömrəsi",
            cardhilderName: "Kart sahibinin adı",
            dateEx: "Bitmə tarixi(ay / il)",
            securityCode: "CVV",
            confirmPay: "Ödənişi təsdiqləyin",
            swalQues: "Məhsul silinəcək",
            swalRemove: "Məhsul silindi",
            swalNotRemove: "Məhsul silinmədi",
            swalBasketRemove: "Səbətdəki bütün məhsullar silinəcək",
            swalBasketRemoveTrue: "Məhsullar silindi",
            swalBasketRemoveFalse: "Məhsullar silinmədi",
            swalFavoriteRemove: "Məhsul bəyənilənlərdən silinəcək",
            swalMessagesend: "Mesaj göndərilsin?",
            swalMessagesendYes: "Mesaj göndərildi",
            swalMessagesendNo: "Mesaj göndərilmədi",
            yes: "Bəli",
            no: "Xeyr",
            desc: "Ətraflı məlumat",
            showAllBlogs: "Bütün Bloqlar",
            desc1:"Bu məhsuldan maksimum 10 ədəd sifariş verilə bilər. Mağaza 10 ədəddən çox sifarişləri ləğv etmək hüququnu özündə saxlayır.",
             desc2:"Kampaniya qiymətinə 10 ədəddən çox məhsul təklif olunur.",
             desc3:"İzlədiyiniz məhsulun satış qiyməti satıcı tərəfindən müəyyən edilir.",


        },
        ru: {
            home: "Главная",
            shop: "Магазин",
            about: "Подробности",
            faqs: "Вопрос и ответ",
            contact: "Контакт",
            learnMore: "Подробности",
            shopNow: "Начать покупки",
            forWoman: "Для женщин",
            forMan: "Для мужчин",
            bagShop: "Сумки",
            forKid: "Для детей",
            shoesShop: "Обувь",
            all: "Все",
            popular: "Популярный",
            brand: "Бренд",
            sale: "Скидка",
            instagramGallery: "Галерея Инстаграм",
            searchProducts: "Поиск продукта",
            categories: "Категории",
            kid: "Для детей",
            kids: "Для детей",
            woman: "Для женщин",
            men: "Для мужчин",
            shoes: "Обувь",
            bag: "Сумки",
            color: "Цвет",
            basket: "Корзина",
            filterByPrice: "Фильтровать по цене",
            size: "Размер",
            showing: "Показаны",
            results: "результатов",
            fromCheapToExpensive: "От дешевого к дорогому",
            fromExpensiveToCheap: "От дорогого к дешевому",
            a_z: "А - Я",
            z_a: "Я - A",
            availability: "Доступность",
            price: "Цена",
            inStock: "В наличии",
            addBasket: "Добавить в корзину",
            share: "Поделиться",
            notStock: "Нет в наличии",
            subcategory: "Подкатегория",
            category: "Категория",
            aboutTitle: "Все на расстоянии одного клика: легкие, быстрые и безопасные покупки!",
            aboutDesc: "Наш торговый магазин находится перед вами с современной и увлекательной платформой для наших клиентов, чтобы они могли совершать удобные и качественные покупки. У нас есть много разных категорий на выбор.Наш магазин - лучшая альтернатива для вашего шоппинга. Придя к нам, вы всегда останетесь с нами за качественные продукты, лучшие услуги и самые низкие цены Мы верим, что можем предоставить вам выгодный и надежный опыт покупок. Мы всегда берем пожелания наших клиентов за основу и защищаем их информацию",
            freeShipping: "Бесплатная доставка",
            freeShippingDesc: "Все заказы свыше 10  AZN",
            supportCustomer: "Сервис поддержки",
            supportCustomerDesc: "Круглосуточная служба",
            securePayments: "Безопасные платежи",
            securePaymentsDesc: "Защита безопасности",
            testimonial1: "Я недавно купил пару обуви в этом магазине. Я был впечатлен быстрым обслуживанием. Обувь удобная и качественная. Я определенно буду делать покупки здесь снова!`",
            testimonial2: "В магазине большой выбор товаров, и я смогла найти именно то, что искала. Цены были разумными, и обслуживание клиентов было превосходным. Рекомендую этот магазин всем, кто ищет приятных покупок.",
            testimonial3: "Я уже давно являюсь постоянным клиентом этого магазина и всегда впечатлен разнообразием и качеством продукции. Персонал всегда дружелюбный и услужливый, и я ценю их услуги, чтобы обеспечить наилучшие впечатления от покупок.",
            testimonial4: "Мне нужно было новое платье для особого дня, и я была так счастлива найти его в этом магазине. Я смог найти идеальный материал по низкой цене. Я обязательно вернусь за покупками в ближайшее время!",
            testimonialUser1: "Нигяр Аббасова",
            testimonialUser2: "Вусал Гулиев",
            testimonialUser3: "Эмин Гаджиев",
            testimonialUser4: "Гюнель Сафарова",
            testimonialUserStatus: "Пользователь сайта",
            sendUsMesssage: "Отправьте нам сообщение",
            name: "Имя",
            email: "Электронная почта",
            surname: "Фамилия",
            phone: "Телефон",
            password: "Пароль",
            passwordAgain: "Пароль еще раз",
            submit: "Подтверждать",
            message: "Сообщениеaj",
            address: "Адрес",
            total: "Всего к оплате",
            goBasket: "Перейти в корзину",
            productName: "Наименование товара",
            quantity: "Количество",
            favorites: "ИЗБРАННОЕ",
            instagram: "Инстаграм",
            facebook: "Фейсбук",
            twitter: "Твиттер",
            azn: "манат",
            msale: "#скидкимодамоод",
            welcomeBack: "Добро пожаловать!",
            welcomeToWbesite: "Добро пожаловать на сайт!",
            welcomeBackSub: "Вы можете делать покупки более легко, войдя в свою учетную запись.",
            welcomeToWebsiteSub: "У вас нет аккаунта? Так что зарегистрируйтесь сейчас!",
            login: "Входить",
            signUp: "Pегистр",
            register: "Pегистр",
            oops: "Ой",
            pageNotFound: "Страница не найдена",
            goBackToHomePage: "Вернуться на домашнюю страницу",
            footerLocation: "59-я улица, Нью-Йорк, Роуз Таун",
            aboutWebsite: "О сайте",
            location: "Расположение",
            instagramPosts: "Инстаграм делится",
            socials: "Социальные медиа",
            payments: "Платежи",
            readMore: "Читать далее...",
            blogs: "Блоги",
            standart: "СТАНДАРТ",
            xl: "ЭКСТРА БОЛЬШОЙ (XL)",
            l: "БОЛЬШОЙ (L)",
            m: "СРЕДНИЙ (М)",
            s: "МАЛЕНЬКИЙ (С)",
            xs: "ЭКСТРА МАЛЕНЬКИЙ (XS)",
            apply: "Применять",
            clearFilter: "Очистить фильтры",
            locationStore: "Самеду Вургуну 25, 28 мая.",
            similarProducts: "Похожие продукты",
            comments: "Комментарии",
            rating: "Рейтинг",
            signinAcc: "Войти в аккаунт",
            signoutAcc: "Выход",
            writeYourComment: "Пишите свои отзывы о товаре...",
            productNotAdded: "Товар не добавлен...",
            removeProducts: "Удалить продукты",
            pay: "Платить",
            noResultFilter: "Результаты поиска не найдены",
            city: "Город",
            confirmInformation: "Подтвердите информацию",
            contactInformation: "Информация о доставке",
            cardInfo: "Информация о карте",
            cardNumber: "Номер карты",
            cardhilderName: "Имя владельца карты",
            dateEx: "Срок годности (месяц/год)",
            securityCode: "Код безопасности",
            confirmPay: "Подтвердить платеж",
            swalQues: "Товар будет удален",
            swalRemove: "Продукт удален",
            swalNotRemove: "Продукт не удален",
            swalBasketRemove: "Все элементы в корзине будут удалены",
            swalBasketRemoveTrue: "Продукты удалены",
            swalBasketRemoveFalse: "Товары не удалены",
            swalFavoriteRemove: "Товар будет удален из избранного",
            swalMessagesend: "Отправить сообщение?",
            swalMessagesendYes: "Сообщение отправлено",
            swalMessagesendNo: "Сообщение не отправлено",
            yes: "Да",
            no: "Нет",
            desc: "Описание",
            showAllBlogs: "Все блоги",
            desc1:"Можно заказать не более 10 единиц этого товара. Магазин оставляет за собой право отменить заказ, превышающий 10 единиц.",
             desc2:"Более 10 единиц товара выставлены на продажу по цене акции.",
             desc3:"Цена продажи товара, который вы рассмотрели, определяется продавцом.",
        }
    },
    blogs: [{
            id: 1,
            image: "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-1.jpeg",
            content_az: [
                [
                    "2023-cü ildə hansı şərflər və şallar dəbdədir?",
                    "Şal və ya eşarp əsas qarderobun əsas məqamıdır. Aksesuarlar iki əks vəzifəni yerinə yetirir. Birincisi, xarici geyimi qəşəng şəkildə tamamlayan görüntüyə ahəngdar şəkildə uyğunlaşmaqdır. İkincisi, parlaq bir vurğuya çevrilmək, diqqəti cəlb etmək, gözəlliklə sevindirməkdir. Dəbli eşarplar və şallar-2023 toxuması, ölçüsü, rəngi ilə fərqlənir. Yaz və payızda trenddə olacaq yeni məhsullardan danışaq.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-2.jpeg",
                    "https://i.pinimg.com/564x/5d/73/f1/5d73f15b7dde396c7fe3724a771bbf6f.jpg",
                    "https://i.pinimg.com/564x/1c/d3/1f/1cd31f8ad35f4714f8721f6ff0a571e0.jpg"
                ],
                [
                    "Şal və şalların top modelləri",
                    "Dizaynerlər gələn mövsümdə ilk növbədə möhtəşəm, qadına xas və rahat görünüşlər yaratmaq üçün eşarplar və şallardan istifadə etməyi məsləhət görürlər. Moda meylləri təxəyyülü məhdudlaşdırmır və yaşı məhdudlaşdırmır. Aksessuarlar həm çox gənc qızlar, həm də 40-50+ qadınlar üçün mükəmməldir.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-5.jpeg",
                    "https://i.pinimg.com/564x/bf/86/2f/bf862fb93bd9f8f1a51a9cf6f0c7f43a.jpg",
                    "https://i.pinimg.com/564x/71/36/22/713622c279a07c7f860915c35d018328.jpg"
                ],
                [
                    "Saçaq ilə.",
                    "Kateqoriya və mövsümün əsas trendi olmalıdır. Qeyri-adi dizaynda örgülü modellərə diqqət yetirməyə dəyər - bağlamalar, hər bir ipdə dekorativ elementlər, dəstələrə bükülmüş saçaqlar. Populyarlığın zirvəsində Pavlovo-Posad yun şalları, şallar, eşarplar, ipək trikotaj saçaqlı stoles var. Aksessuarları başınıza taxmaq, boyuna bağlamaq, pul kisəsinə taxmaq və hətta kəmər kimi istifadə etmək olar.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-10.jpeg",
                    "https://i.pinimg.com/564x/de/2e/17/de2e178c749f5b3909b304387d6e45ef.jpg",
                    "https://i.pinimg.com/564x/ff/04/38/ff0438aad4ef1966afa8c7121e95e7f0.jpg"
                ],
                [
                    "Dəbli şərflər və naxışlı şallar.",
                    "Heyvan və etnik izlər qəbul edilir. Onlar monoxromatik bir paltarı şaxələndirirlər və cəsarətli bir paltarın parlaqlığını artırırlar. Bəbir, ilanın dərisini xatırladan rəngləmə yaradıcı geyimlərdə faydalı olacaq. Populyarlıqda ilk onluğa şərq ornamentləri, jakkard texnikasında Norveç naxışları daxildir. Parlaq və klassik plaid, 'qarğa ayaqları', həndəsə, 'bükülmüş reallıq' moda hesab olunur. Yazda ənənəvi çiçək çaplarına müraciət edə bilərsiniz.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-14.jpeg",
                    "https://i.pinimg.com/564x/be/51/2e/be512e7395cf8b6fad1c825050ccb0d3.jpg",
                    "https://i.pinimg.com/564x/23/37/ed/2337ed678ce69f3f9c748a5bcaa2f344.jpg"
                ]
            ],
            content_ru: [
                [
                    "Какие шарфы и шали будут в моде в 2023 году?",
                    "Шаль или шарф – изюминка основного гардероба. Аксессуары выполняют две противоположные задачи. Первая – гармонично вписаться в образ, стильно дополняя верхнюю одежду. Вторая – стать ярким акцентом, привлечь внимание, порадовать красотой. шарфы и шали-2023 ткань , отличается размером, цветом.Поговорим о новинках, которые будут в тренде весной и осенью.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-2.jpeg",
                    "https://i.pinimg.com/564x/5d/73/f1/5d73f15b7dde396c7fe3724a771bbf6f.jpg",
                    "https://i.pinimg.com/564x/1c/d3/1f/1cd31f8ad35f4714f8721f6ff0a571e0.jpg"
                ],
                [
                    "Топ-модели шалей и шалей",
                    "В наступающем сезоне дизайнеры рекомендуют использовать шарфы и шали в первую очередь для создания эффектных, женственных и удобных образов. Модные тенденции не ограничивают фантазию и возраст. Аксессуары отлично подойдут как совсем юным девушкам, так и женщинам 40-50+.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-5.jpeg",
                    "https://i.pinimg.com/564x/bf/86/2f/bf862fb93bd9f8f1a51a9cf6f0c7f43a.jpg",
                    "https://i.pinimg.com/564x/71/36/22/713622c279a07c7f860915c35d018328.jpg"
                ],
                [
                    "С бахромой.",
                    "Должен стать главным трендом категории и сезона. Стоит обратить внимание на вязаные модели в необычном дизайне – завязки, декоративные элементы на каждой нитке, бахрома, завернутая в пучки. На пике популярности павлово-посадские шерстяные шали. , шали, шарфы, палантины с шелковой вязаной бахромой.Аксессуары на голове можно носить, завязывать на шее, прикреплять к сумочке и даже использовать как пояс.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-10.jpeg",
                    "https://i.pinimg.com/564x/de/2e/17/de2e178c749f5b3909b304387d6e45ef.jpg",
                    "https://i.pinimg.com/564x/ff/04/38/ff0438aad4ef1966afa8c7121e95e7f0.jpg"
                ],
                [
                    "Стильные шарфы и вышитые шали.",
                    "Допускаются животные и этнические принты. Они разнообразят однотонный наряд и прибавят яркости смелому наряду. Расцветки, напоминающие леопардовую, змеиную кожу, пригодятся в креативных нарядах. В десятку по популярности входят восточные орнаменты, норвежские узоры в жаккардовой технике Яркая и классическая клетка, 'гусиные лапки', геометрия, 'искривленная реальность' считаются модными. Весной можно пойти на традиционные цветочные принты.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-14.jpeg",
                    "https://i.pinimg.com/564x/be/51/2e/be512e7395cf8b6fad1c825050ccb0d3.jpg",
                    "https://i.pinimg.com/564x/23/37/ed/2337ed678ce69f3f9c748a5bcaa2f344.jpg"
                ]
            ],
            content_en: [
                [
                    "Which scarves and shawls will be in fashion in 2023?",
                    "A shawl or scarf is the highlight of the main wardrobe. Accessories perform two opposite tasks. The first is to harmoniously fit into the image, stylishly complementing outerwear. The second is to become a bright accent, attract attention, delight with beauty. Fashionable scarves and shawls-2023 fabric , differs in size, color. Let's talk about new products that will be in trend in spring and autumn.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-2.jpeg",
                    "https://i.pinimg.com/564x/5d/73/f1/5d73f15b7dde396c7fe3724a771bbf6f.jpg",
                    "https://i.pinimg.com/564x/1c/d3/1f/1cd31f8ad35f4714f8721f6ff0a571e0.jpg"
                ],
                [
                    "Top models of shawls and shawls",
                    "In the coming season, designers recommend using scarves and shawls primarily to create spectacular, feminine and comfortable looks. Fashion trends do not limit imagination and age. Accessories are perfect for both very young girls and women 40-50+.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-5.jpeg",
                    "https://i.pinimg.com/564x/bf/86/2f/bf862fb93bd9f8f1a51a9cf6f0c7f43a.jpg",
                    "https://i.pinimg.com/564x/71/36/22/713622c279a07c7f860915c35d018328.jpg"
                ],
                [
                    "With a fringe.",
                    "It should be the main trend of the category and season. It is worth paying attention to knitted models in an unusual design - ties, decorative elements on each thread, fringes wrapped in bunches. At the peak of popularity are Pavlovo-Posad woolen shawls, shawls, scarves, stoles with silk knitted fringes. Accessories on your head can be worn, tied around the neck, attached to a purse and even used as a belt.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-10.jpeg",
                    "https://i.pinimg.com/564x/de/2e/17/de2e178c749f5b3909b304387d6e45ef.jpg",
                    "https://i.pinimg.com/564x/ff/04/38/ff0438aad4ef1966afa8c7121e95e7f0.jpg"
                ],
                [
                    "Stylish scarves and embroidered shawls.",
                    "Animal and ethnic prints are accepted. They diversify a monochromatic outfit and increase the brightness of a bold outfit. Coloring reminiscent of leopard, snake skin will be useful in creative outfits. The top ten in popularity include oriental ornaments, Norwegian patterns in jacquard technique. Bright and classic plaid, 'crow legs', geometry, 'twisted reality' are considered fashionable. In spring, you can go for traditional floral prints.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/word-image-221178-14.jpeg",
                    "https://i.pinimg.com/564x/be/51/2e/be512e7395cf8b6fad1c825050ccb0d3.jpg",
                    "https://i.pinimg.com/564x/23/37/ed/2337ed678ce69f3f9c748a5bcaa2f344.jpg"
                ]
            ]

        },
        {
            id: 2,
            image: "https://confettissimo.com/wp-content/uploads/2023/01/1835784202_0_46_1325_791_600x0_80_0_0_b48e9bb3443c260a7bceae7bd4ebc6ac.jpg.webp",
            content_az: [
                [
                    "2023-cü ilin əsas rəngi Viva Magenta - geyimdə, interyerdə istifadə",
                    "Ənənəyə görə, dekabrın əvvəlində Pantone Rəng İnstitutu gələcəyə dair proqnoz verir və gələn ilin ən populyar kölgəsini müəyyənləşdirir. Bu dəfə proqnoz təkcə ekspertlər tərəfindən təqdim edilməyib: süni intellekt köməyə cəlb edilib, yəni Midjourney neyron şəbəkəsi. Nəticə Viva Magenta adlandırılan zəngin qırmızı rəng oldu. Mütəxəssislərin fikrincə, bu xüsusi kölgə 2023-cü ildə xüsusilə məşhur olacaq. Viva Magenta nə qədər diqqətəlayiqdir və bizim qarderobumuzdan başqa hansı rənglər onunla birləşdirilməlidir!",
                    "https://confettissimo.com/wp-content/uploads/2023/01/pantone-color-of-the-year-collab-intro-artechouse.jpg",
                    "https://images.squarespace-cdn.com/content/v1/60f24282a04e9153e90c1d1d/f661cd9e-8904-4c28-9798-58000c827e4c/png.png",
                    "https://i0.wp.com/soyamber.com/wp-content/uploads/2022/12/89371f8856e97c2b7e87f6600a64440f.jpg?ssl=1"
                ],
                [
                    "Moda Viva Magenta",
                    "İlin rənginin seçimi təsadüfi deyil. Mütəxəssislər bunu müəyyən etmək üçün suya batırılır və həyatımızın müxtəlif sahələrini öyrənirlər: incəsənət, əyləncə, idman, eləcə də müxtəlif mədəniyyətlər. Təhlil ətrafımızdakı həyatda ən çox baş verməyə başlayan rəngləri vurğulamağa imkan verir. Pantone rəng üçün dəbi diktə etmir, amma biz bunu edirik.",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-1.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/cvet-2023-goda-viva-magenta.jpeg"
                ],
                [
                    "Ümumi qırmızı",
                    "Ola bilsin ki, Viva Magenta özünü komanda oyunçusu kimi deyil, müstəqil bir vahid kimi ən yaxşı şəkildə göstərir. Buna görə də bu rəng ən çox podiumda total görünüş kimi görünür. Nümunələr axtarmaq lazım deyil - Versace, Alberta Ferretti, Elie Saab və bir çox başqaları rəngli axşam görünüşləri yaratmaq üçün Viva Magentadan istifadə edirlər.",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-1.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-2.jpg"

                ],
                [
                    "Qara ilə",
                    "Viva Magenta çox vurğudur, ona görə də onu akromatik rənglərlə susdurmaq mümkün deyil. Belə ki, hətta qara Magenta ilə qoşalaşmış, doyma itirmir. Ancaq bu, heç də bu birləşmədən çıxmaq lazım olduğunu ifadə etmir. Əksinə, axşam gəzintiləri üçün cəsarətli və eyni zamanda zərif təsvirlər əldə edilir. Və, əlbəttə ki, heç kim ümumi qara və parlaq bir kölgədə sevimli aksesuar ilə seçimi ləğv etmədi!",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-5.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-6.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-7.jpg"
                ]
            ],
            content_en: [
                [
                    "The main color of 2023 Viva Magenta - use in clothing, interior",
                    "According to tradition, at the beginning of December, the Pantone Color Institute predicts the future and determines the most popular shade of the coming year. This time, the forecast was not only provided by experts: artificial intelligence was brought to the rescue, namely the Midjourney neural network. The result was a rich red color called Viva Magenta. According to experts, this particular shade will be especially popular in 2023. How remarkable is Viva Magenta and what other colors should be combined with it in our wardrobe!",
                    "https://confettissimo.com/wp-content/uploads/2023/01/pantone-color-of-the-year-collab-intro-artechouse.jpg",
                    "https://images.squarespace-cdn.com/content/v1/60f24282a04e9153e90c1d1d/f661cd9e-8904-4c28-9798-58000c827e4c/png.png",
                    "https://i0.wp.com/soyamber.com/wp-content/uploads/2022/12/89371f8856e97c2b7e87f6600a64440f.jpg?ssl=1"
                ],
                [
                    "Moda Viva Magenta",
                    "The choice of the color of the year is not random. To determine it, experts dive into the water and study different areas of our lives: art, entertainment, sports, as well as different cultures. The analysis allows us to highlight the colors that are most likely to occur in the life around us. Pantone does not dictate fashion for color. , but we do it.",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-1.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/cvet-2023-goda-viva-magenta.jpeg"
                ],
                [
                    "Common Red",
                    "Perhaps, Viva Magenta shows itself best not as a team player, but as an independent unit. Therefore, this color is most often seen as a total look on the catwalk. You don't need to look for examples - Versace, Alberta Ferretti, Elie Saab and many others use Viva Magenta to create colorful evening looks.",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-1.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-2.jpg"

                ],
                [
                    "With Black",
                    "Viva Magenta is very accent, so it cannot be muted with achromatic colors. So, even paired with black Magenta, it does not lose saturation. But this does not mean that it is necessary to get out of this combination. On the contrary, it is bold for evening walks and at the same time elegant images are obtained. And, of course, no one canceled the choice with a favorite accessory in a general black and bright shade!",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-5.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-6.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-7.jpg"
                ]
            ],
            content_ru: [
                [
                    "Основной цвет 2023 года Viva Magenta — использование в одежде, интерьере",
                    "По традиции, в начале декабря институт цвета Pantone предсказывает будущее и определяет самый популярный оттенок наступающего года. На этот раз прогноз предоставили не только эксперты: на помощь пришел искусственный интеллект, а именно нейросети Midjourney. В результате получился насыщенный красный цвет под названием Viva Magenta. По мнению экспертов, именно этот оттенок будет особенно популярен в 2023 году. Чем же замечателен Viva Magenta и какие еще цвета должны сочетаться с ним в нашем гардеробе!",
                    "https://confettissimo.com/wp-content/uploads/2023/01/pantone-color-of-the-year-collab-intro-artechouse.jpg",
                    "https://images.squarespace-cdn.com/content/v1/60f24282a04e9153e90c1d1d/f661cd9e-8904-4c28-9798-58000c827e4c/png.png",
                    "https://i0.wp.com/soyamber.com/wp-content/uploads/2022/12/89371f8856e97c2b7e87f6600a64440f.jpg?ssl=1"
                ],
                [
                    "Мода Вива Пурпурный",
                    "Выбор цвета года не случаен. Для его определения специалисты погружаются в воду и изучают разные сферы нашей жизни: искусство, развлечения, спорт, а также разные культуры. Анализ позволяет выделить цвета которые чаще всего встречаются в окружающей нас жизни. Не Pantone диктует моду на цвет, а мы это делаем.",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-1.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/cvet-2023-goda-viva-magenta.jpeg"
                ],
                [
                    "Обыкновенный красный",
                    "Пожалуй, Viva Magenta лучше всего проявляет себя не как командный игрок, а как самостоятельная единица. Поэтому этот цвет чаще всего воспринимается на подиуме как тотал-лук. Примеры искать не нужно — Versace, Alberta Ferretti , Elie Saab и многие другие используют Viva Magenta для создания красочных вечерних образов.",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-1.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-2.jpg"

                ],
                [
                    "С черным",
                    "Viva Magenta очень акцентная, поэтому ее нельзя приглушить ахроматическими цветами. Так что даже в паре с черной Magenta она не теряет насыщенности. Но это не значит, что из этого сочетания нужно выходить. Наоборот, дерзко для вечерних прогулок и при этом получаются элегантные образы. И, конечно же, никто не отменял выбор с любимым аксессуаром в общем черном и ярком оттенке!",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-5.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-6.jpg",
                    "https://confettissimo.com/wp-content/uploads/2023/01/viva-magenta-glavnyj-cvet-2023-goda-s-chem-ego-so-7.jpg"
                ]
            ]
        },
        {
            id: 3,
            image: "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a64c1c64-870x400.jpeg",
            content_az: [
                [
                    "Stil sirləri: qısa boylu qadınlar üçün pencək necə geyinmək olar",
                    "Gödəkçə heç vaxt dəbdən düşməyən mütləq klassikdir və demək olar ki, hər bir qadının qarderobunda mövcuddur. Bu, hər hansı bir hadisə üçün uyğun olan və inamlı bir görünüş verən əsas elementdir. Bununla belə, uyğun gödəkçə və ya gödəkçə axtararkən, qısa boylu qadınlar ciddi problemlə üzləşirlər - çox uzun qollar, çox geniş çiyin yastiqləri və ya yanlış kəsmə. Qısa boyunuza görə tez-tez doğru gödəkçə tapmaqda çətinlik çəkirsinizsə, sizə hansı modellərin daha çox uyğun olduğunu və seçim edərkən nələrə diqqət edəcəyinizi söyləyəcəyik.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a652d717.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a656ad2c.jpeg",
                    "https://images.express.com/is/image/expressfashion/0078_06746920_1238_3_fb?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
                ],
                [
                    "Kəmər ilə.",
                    "Düzgün uyğunluqdan əlavə, düzgün aksesuarla belinizi də mükəmməl müəyyən edə bilərsiniz. Kəmər diqqəti bədəninizin ortasına çəkir, belinizi və siluetinizi daha aydın edir. Bu sadə moda sirri ilə siz vizual olaraq boyunuza bir neçə santimetr əlavə edə bilərsiniz. Kəmər nə qədər geniş olsa, təsir bir o qədər güclü olar.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a66022eb.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a6632cb8.jpeg",
                    "https://www.legalleeblonde.com/wp-content/uploads/2018/02/black-blazer-with-Gucci-dupe-belt-worn-on-top.jpg"
                ],
                [
                    "Uzun gödəkçələr",
                    "Qısa boylu qadınların uzun gödəkçələr geyinməməsi ilə bağlı yanlış fikir var. Əksinə, geyimlərin düzgün birləşməsindən asılıdır. Şəkilinizi ağıllı şəkildə yığın. Yüksək belli cins şalvar geyinmək ombanızı vurğulayacaq və sizi daha uzun göstərəcək. Bənzər bir təsir yüksək kəsilmiş yubka ilə əldə edilir. Bir yubka və ya cins şalvarı kəsilmiş köynək və ya sviterlə birləşdirin.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a669efd3.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a66d1b85.jpeg",
                    "https://i.etsystatic.com/25874578/r/il/25e307/3845241963/il_570xN.3845241963_i83i.jpg"

                ]
            ],
            content_en: [
                [
                    "Style secrets: how to wear a jacket for short women",
                    "A jacket is an absolute classic that never goes out of style and is in almost every woman's wardrobe. It's a staple item that's appropriate for any occasion and gives off a confident look. However, when looking for the right jacket or jacket, short women seriously they face a problem - too long sleeves, too wide shoulder pads or the wrong cut. If you often find it difficult to find the right jacket due to your short height, we will tell you which models are more suitable and what to pay attention to when choosing.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a652d717.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a656ad2c.jpeg",
                    "https://images.express.com/is/image/expressfashion/0078_06746920_1238_3_fb?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
                ],
                [
                    "With a belt.",
                    "In addition to the correct fit, with the right accessory, you can perfectly define your waist. The belt draws attention to the middle of your body, making your waist and silhouette more obvious. With this simple fashion secret, you can visually add a few centimeters to your height. The wider the belt, the greater the effect. the stronger it is.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a66022eb.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a6632cb8.jpeg",
                    "https://www.legalleeblonde.com/wp-content/uploads/2018/02/black-blazer-with-Gucci-dupe-belt-worn-on-top.jpg"
                ],
                [
                    "Long jackets",
                    "There is a misconception that short women should not wear long jackets. On the contrary, it depends on the right combination of clothes. Compose your image wisely. Wearing high-waisted jeans will emphasize your hips and make you look taller. A similar effect is achieved with a high-cut skirt. A skirt or pair jeans with a cropped shirt or sweater.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a669efd3.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a66d1b85.jpeg",
                    "https://i.etsystatic.com/25874578/r/il/25e307/3845241963/il_570xN.3845241963_i83i.jpg"

                ]
            ],
            content_ru: [
                [
                    "Секреты стиля: с чем носить жакет невысоким женщинам",
                    "Пиджак — это абсолютная классика, которая никогда не выходит из моды и есть в гардеробе практически каждой женщины. Это базовая вещь, подходящая для любого случая и создающая уверенный образ. серьёзно сталкиваются с проблемой - слишком длинные рукава, слишком широкие подплечники или неправильный крой.Если вы часто затрудняетесь подобрать подходящую куртку из-за своего маленького роста, мы подскажем, какие модели вам больше подходят и на что обратить внимание при выборе.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a652d717.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a656ad2c.jpeg",
                    "https://images.express.com/is/image/expressfashion/0078_06746920_1238_3_fb?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon"
                ],
                [
                    "С поясом.",
                    "Помимо правильной посадки, правильно подобранным аксессуаром можно идеально выделить талию. Пояс привлекает внимание к середине тела, делая талию и силуэт более очевидными. С помощью этого простого модного секрета можно визуально добавить несколько сантиметров к вашему росту. Чем шире пояс, тем сильнее эффект, тем он прочнее.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a66022eb.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a6632cb8.jpeg",
                    "https://www.legalleeblonde.com/wp-content/uploads/2018/02/black-blazer-with-Gucci-dupe-belt-worn-on-top.jpg"
                ],
                [
                    "Long jackets",
                    "There is a misconception that short women should not wear long jackets. On the contrary, it depends on the right combination of clothes. Compose your image wisely. Wearing high-waisted jeans will emphasize your hips and make you look taller. A similar effect is achieved with a high-cut skirt. A skirt or pair jeans with a cropped shirt or sweater.",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a669efd3.jpeg",
                    "https://confettissimo.com/wp-content/uploads/2023/03/d181d0b5d0bad180d0b5d182d18b-d181d182d0b8d0bbd18f-d0bad0b0d0ba-d0bdd0bed181d0b8d182d18c-d0bfd0b8d0b4d0b6d0b0d0ba-d0bdd0b5d0b2d18bd181_64116a66d1b85.jpeg",
                    "https://i.etsystatic.com/25874578/r/il/25e307/3845241963/il_570xN.3845241963_i83i.jpg"

                ]
            ]
        }
    ],
    aLang: localLang || "az",
    basket: localBasket ? JSON.parse(localBasket) : [],
    favorite: localFavorite ? JSON.parse(localFavorite) : [],
    // users: localUsers[0].name !== "" ? JSON.parse(localUsers) : [],
    // activeUser: localActiveUser?.name ? localActiveUser : {}
    singleuser: localSingleUser,
    users: localUsers == "undefined" ? [] : JSON.parse(localUsers),
    // x:localUsers
    // cat:""
    messages: localMessages !== "undefined" ? JSON.parse(localMessages) : [],
    selectedCategory: "",
    selectedSubCategory: ""
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            // localStorage.setItem("products", JSON.stringify(action.payload));
            return {
                ...state, products: action.payload
            };
        case "SET_CATEGORIES":
            return {
                ...state, categories: action.payload
            };
        case "SET_SUBCATEGORIES":
            return {
                ...state, subcategories: action.payload
            };
        case "SET_BASKET":
            return {
                ...state, basket: action.payload
            };
        case "SET_MESSAGES":
            localStorage.setItem("messages", JSON.stringify(action.payload));
            return {
                ...state, messages: action.payload
            };
        case "SET_FAVORITE":
            return {
                ...state, favorite: action.payload
            };
            // case "SET_CAT":
            //         return { ...state, cat: action.payload };
        case "LANGUAGE":
            localStorage.setItem("lang", action.payload);
            return {
                ...state, aLang: action.payload
            };
        case "REGISTER_USER":
            localStorage.setItem("users", JSON.stringify(action.payload));
            return {
                ...state, users: action.payload
            };
        case "SET_SINGLE_USER":
            localStorage.setItem("singleuser", JSON.stringify(action.payload));
            return {
                ...state, singleuser: action.payload
            };
        case "SET_CATEGORY":
            return {
                ...state, selectedCategory: action.payload
            };
        case "SET_SUBCATEGORY":
            return {
                ...state, selectedSubCategory: action.payload
            };
            // case "SINGLE_USER":
            //     localStorage.setItem("activeUser", action.payload);
            //     return { ...state, activeUser: action.payload };

        default:
            return state;
    }
}