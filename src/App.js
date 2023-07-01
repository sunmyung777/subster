import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './pages/Main';
import Book from './pages/Book';
import Food from './pages/Food';
import Life from './pages/Life';
import Ott from './pages/Ott';
import Others from './pages/Others';
/* eslint-disable */
const itemData={
 "life":[
	 {
  "class": "남성 생활 용품",
  "name": "와이즐리",
  "price": "x",
  "img": "wisely",
  "link": "http:\/\/wisely.wiselycompany.com\/product\/list.html?cate_no=100"
 },
 {
  "class": "면도기 정기 배송",
  "name": "레이지 소사이어티",
  "price": "x",
  "img": "lazysociety",
  "link": "https:\/\/lazysociety.co.kr\/"
 },
 {
  "class": "여성용품 정기 배송",
  "name": "해피문데이",
  "price": "x",
  "img": "happymoonday",
  "link": "https:\/\/happymoonday.com\/"
 },
 {
  "class": "의류 대여",
  "name": "클로젯셰어",
  "price": 30000,
  "img": "closetshare",
  "link": "https:\/\/www.closetshare.com\/theclozet\/front\/membership\/membershipList"
 },
 {
  "class": "빨래 대행 서비스",
  "name": "런드리고",
  "price": 64200,
  "img": "laundrygo",
  "link": "https:\/\/play.google.com\/store\/apps\/details?id=com.laundrygo.android&hl=ko&gl=US&pli=1"
 },
 {
  "class": "청소 대행",
  "name": "청소연구소",
  "price": 46200,
  "img": "cleaninglab",
  "link": "https:\/\/www.cleaninglab.co.kr\/home_clean"
 },
 {
  "class": "꽃 구독",
  "name": "꾸까",
  "price": 17000,
  "img": "kukka",
  "link": "https:\/\/kukka.kr\/subscription\/lineup\/?link=intro"
 },
 {
  "class": "양말 구독",
  "name": "미하이삭스",
  "price": 6900,
  "img": "mehisox",
  "link": "https:\/\/www.mehisox.com\/subscription\/"
 },
 {
  "class": "그림 정기 구독",
  "name": "핀즐",
  "price": 18900,
  "img": "pinzle",
  "link": "https:\/\/m.pinzle.net\/product\/detail.html?product_no=2343&cate_no=83&display_group=1"
 },
 {
  "class": "그림 렌탈",
  "name": "오픈갤러리",
  "price": 33000,
  "img": "opengallery",
  "link": "https:\/\/www.opengallery.co.kr\/rental-service\/"
 },
 {
  "class": "영양제 정기 구독",
  "name": "필리",
  "price": "x",
  "img": "pilly",
  "link": "https:\/\/pilly.kr\/store\/hotdeal\/all"
 },
 {
  "class": "반려동물 용품 구독",
  "name": "핏펫",
  "price": 2900,
  "img": "fitpet",
  "link": "https:\/\/www.fitpetmall.com\/mall\/membership\/intro?location=gnb_home"
 },
 {
  "class": "반려동물 용품 구독",
  "name": "베이컨박스",
  "price": 28900,
  "img": "baconbox",
  "link": "https:\/\/www.baconbox.co\/box"
 },
 {
  "class": "화장품 정기 배송",
  "name": "톤28",
  "price": 39000,
  "img": "toun28",
  "link": "https:\/\/www.toun28.com\/subscription"
 },
 {
  "class": "가구 구독",
  "name": "살구",
  "price": "x",
  "img": "thesalgu",
  "link": "https:\/\/thesalgu.com\/shop\/product-shop?mainCategoryName=%EC%86%8C%ED%8C%8C&sorting=%EC%9D%B8%EA%B8%B0%EC%88%9C"
 },
 {
  "class": "수공예품 정기 구독",
  "name": "크래프트링크",
  "price": 20000,
  "img": "craftlink",
  "link": "https:\/\/craft-link.co.kr\/subscription"
 },
 {
  "class": "침구류 정기 배송",
  "name": "클린베딩",
  "price": 33000,
  "img": "cleanbedding",
  "link": "https:\/\/www.cleanbedding.kr\/subscribe"
 },
 {
  "class": "중고차 정기 구독",
  "name": "트라이브",
  "price": "x",
  "img": "thetrive",
  "link": "https:\/\/thetrive.com\/"
 },
 {
  "class": "물품 정기배송",
  "name": "이마트몰",
  "price": "x",
  "img": "emart",
  "link": "https:\/\/emart.ssg.com\/service\/emart\/dvstore.ssg"
 },
 {
  "class": "자동차 구독",
  "name": "현대 셀렉션",
  "price": "x",
  "img": "hyundai",
  "link": "https:\/\/www.hyundai.com\/kr\/ko\/digital-customer-support\/app\/hyundai-selection\/hyundai-selection-information"
 },
 {
  "class": "자동차 구독",
  "name": "기아 플렉스",
  "price": "x",
  "img": "kia",
  "link": "https:\/\/www.kia.com\/kr\/buy\/rent-used-car\/flex"
 },
 ],
 "ott":[
	 {
  "class": "ott",
  "name": "넷플릭스",
  "price": 9500,
  "img": "netflix",
  "link": "https:\/\/www.netflix.com\/kr\/"
 },
 {
  "class": "ott",
  "name": "티빙",
  "price": 7900,
  "img": "tving",
  "link": "https:\/\/www.tving.com\/"
 },
 {
  "class": "ott",
  "name": "쿠팡플레이",
  "price": 4990,
  "img": "coupangplay",
  "link": "https:\/\/www.coupangplay.com\/"
 },
 {
  "class": "ott",
  "name": "디즈니플러스",
  "price": 9900,
  "img": "disneyplus",
  "link": "https:\/\/www.disneyplus.com\/ko-kr?cid=DSS-Search-Google-71700000088339394-&s_kwcid=AL!8468!3!622932036847!p!!g!!%EB%94%94%EC%A6%88%EB%8B%88%ED%94%8C%EB%9F%AC%EC%8A%A4%EA%B0%80%EA%B2%A9&gclid=Cj0KCQjwqNqkBhDlARIsAFaxvwzJYnJopNqeF7VQRADAe8JnITIi2inLgMQSoqgo2I9T2aCTk1uTnb8aAi6-EALw_wcB&gclsrc=aw.ds"
 },
 {
  "class": "ott",
  "name": "라프텔",
  "price": 9900,
  "img": "laftel",
  "link": "https:\/\/laftel.net\/auth\/login?next=\/membership"
 },
 {
  "class": "ott",
  "name": "웨이브",
  "price": 7900,
  "img": "wavve",
  "link": "https:\/\/www.wavve.com\/voucher\/index.html"
 },
 {
  "class": "ott",
  "name": "왓챠",
  "price": 7900,
  "img": "watcha",
  "link": "https:\/\/watcha.com\/"
 },
 ],
 "book":[
	 {
  "class": "전자책",
  "name": "리디셀렉트",
  "price": 9900,
  "img": "ridibooks",
  "link": "https:\/\/select.ridibooks.com\/home"
 },
 {
  "class": "전자책",
  "name": "밀리의서재",
  "price": 9900,
  "img": "millie",
  "link": "https:\/\/www.millie.co.kr\/v3\/brand\/update?utm_source=google&utm_medium=cpc&utm_campaign=pc&utm_content=brand&utm_term=%2B%EB%B0%80%EB%A6%AC%EC%9D%98%2B%EC%84%9C%EC%9E%AC%2B&gad=1&gclid=Cj0KCQjwqNqkBhDlARIsAFaxvwwYcl9-7UFg7ApmaKwrQu5WGer6n9A-f4Bh7l_-Pw3CBZAez1z7GYQaAuJhEALw_wcB"
 },
 {
  "class": "전자책",
  "name": "교보 sam",
  "price": 9900,
  "img": "kyobobook",
  "link": "https:\/\/ebook.kyobobook.co.kr\/dig\/sam\/samcnfg?tabType=SAM"
 },
 {
  "class": "전자책",
  "name": "yes24북클럽",
  "price": 5500,
  "img": "cremaclub",
  "link": "https:\/\/cremaclub.yes24.com\/Bookclub\/intro?utm_source=google&utm_medium=display&utm_campaign=20257842423&utm_content=&utm_term=&gclid=Cj0KCQjwqNqkBhDlARIsAFaxvwwvDVDdiksCR3WrByzmGf63wnKazbfI5vNUVLSv11bcAMW6iLg9SC4aAtnhEALw_wcB"
 },
 {
  "class": "도서 대여, 정기배송",
  "name": "플라이북",
  "price": 9900,
  "img": "flybook",
  "link": "https:\/\/www.flybook.kr\/plus"
 },
 {
  "class": "전문가 리포트 구독",
  "name": "퍼블리",
  "price": 11000,
  "img": "publy",
  "link": "https:\/\/publy.co\/"
 },
 {
  "class": "뉴스 구독 상품",
  "name": "북저널리즘",
  "price": 7900,
  "img": "bookjournalism",
  "link": "https:\/\/www.bookjournalism.com\/prime"
 },
 {
  "class": "IT,테크 뉴스 구독",
  "name": "아웃스탠딩",
  "price": 11900,
  "img": "outstanding",
  "link": "https:\/\/outstanding.kr\/premium-membership"
 },
 {
  "class": "오디오북",
  "name": "윌라",
  "price": 9900,
  "img": "welaaa",
  "link": "https:\/\/www.welaaa.com\/membership"
 },
 {
  "class": "자체 뉴스 구독 상품",
  "name": "폴인",
  "price": 7800,
  "img": "folin",
  "link": "https:\/\/www.folin.co\/membership"
 },
 {
  "class": "에세이 구독",
  "name": "북크루",
  "price": 0,
  "img": "bookcrew",
  "link": "https:\/\/www.bookcrew.net\/shelleyBooks"
 },
 {
  "class": "에세이 구독",
  "name": "일간이슬아",
  "price": 0,
  "img": "sullalee",
  "link": "https:\/\/www.sullalee.com\/dailee-sulla"
 },
 {
  "class": "뉴스 구독 상품",
  "name": "뉴닉",
  "price": "x",
  "img": "newneek",
  "link": "https:\/\/newneek.co\/"
 },
 {
  "class": "뉴스 구독 상품",
  "name": "머니레터",
  "price": "x",
  "img": "uppity",
  "link": "https:\/\/uppity.co.kr\/"
 },
 {
  "class": "뉴스 구독 상품",
  "name": "캐릿",
  "price": 5500,
  "img": "careet",
  "link": "https:\/\/www.careet.net\/Subscribe"
 },
 {
  "class": "도서 추천",
  "name": "에그브렉",
  "price": 0,
  "img": "eggbreak",
  "link": "https:\/\/page.stibee.com\/subscriptions\/61665"
 },
 {
  "class": "뉴스 구독 상품",
  "name": "미라클레터",
  "price": 0,
  "img": "mirakleletter",
  "link": "https:\/\/page.stibee.com\/subscriptions\/33271"
 },
 {
  "class": "뉴스 구독 상품",
  "name": "더밀크",
  "price": 0,
  "img": "themilk",
  "link": "https:\/\/docs.google.com\/forms\/d\/e\/1FAIpQLScOAY62JVZMdZ1GEEA6jbfqHKG8k3kiAtI4-brIBE-dBc1wiQ\/viewform"
 },
],
 "others":[
	 {
  "class": "음악 스트리밍",
  "name": "멜론",
  "price": 7900,
  "img": "melon",
  "link": "https:\/\/www.melon.com\/buy\/pamphlet\/all.htm"
 },
 {
  "class": "음악 스트리밍",
  "name": "바이브",
  "price": 7200,
  "img": "vibe",
  "link": "https:\/\/vibe.naver.com\/membership\/vibe?utm_source=vibeweb&utm_medium=gnb_membershipsubscription&utm_campaign=membership_click_tracking"
 },
 {
  "class": "음악 스트리밍",
  "name": "지니",
  "price": 8400,
  "img": "genie",
  "link": "https:\/\/pay.genie.co.kr\/product\/productMain"
 },
 {
  "class": "음악 스트리밍",
  "name": "벅스",
  "price": 7900,
  "img": "bugs",
  "link": "https:\/\/music.bugs.co.kr\/pay\/public"
 },
 {
  "class": "음악 스트리밍",
  "name": "플로",
  "price": 7900,
  "img": "flo",
  "link": "https:\/\/www.music-flo.com\/purchase\/voucher"
 },
 {
  "class": "배송 할인, 새벽 배송",
  "name": "로켓와우",
  "price": 4990,
  "img": "coupangrocket",
  "link": "https:\/\/loyalty.coupang.com\/loyalty\/sign-up\/home"
 },
 {
  "class": "네이버 관련 서비스",
  "name": "네이버플러스",
  "price": 4900,
  "img": "naver",
  "link": "https:\/\/nid.naver.com\/membership\/join"
 },
 {
  "class": "렌트 할인권 구독",
  "name": "쏘카패스",
  "price": 4900,
  "img": "socar",
  "link": "https:\/\/blog.socar.kr\/10382"
 },
 {
  "class": "신세계 할인권 구독",
  "name": "신세계 유니버스 클럽",
  "price": 30000,
  "img": "gmarket",
  "link": "https:\/\/club.gmarket.co.kr\/"
 },
 ],
 "food":[
	 {
  "class": "나물 정기 구독",
  "name": "나물투데이",
  "price": 39600,
  "img": "namultoday",
  "link": "https:\/\/namultoday.com\/product\/list.html?cate_no=298"
 },
 {
  "class": "사무실 스낵 정기 배송",
  "name": "스낵24",
  "price": "x",
  "img": "snack24",
  "link": "https:\/\/www.wefuncorp.com\/snack"
 },
 {
  "class": "사무실 스낵 정기 배송",
  "name": "스낵포",
  "price": 69000,
  "img": "snackfor",
  "link": "https:\/\/www.snackfor.com\/"
 },
 {
  "class": "산삼 정기 배송",
  "name": "삼이오",
  "price": 96000,
  "img": 325,
  "link": "http:\/\/325.farm\/product\/%EC%82%BC%EC%9D%B4%EC%98%A4-%EC%A0%95-7%EB%85%84%EA%B7%BC-%EC%82%B0%EC%96%91%EC%82%B0%EC%82%BC-%EC%A0%95%EA%B8%B0%EA%B5%AC%EB%8F%85%EC%A0%84%EC%9A%A9\/17\/category\/23\/display\/1\/"
 },
 {
  "class": "전통주 정기 배송",
  "name": "술담화",
  "price": 39000,
  "img": "sooldamhwa",
  "link": "https:\/\/www.sooldamhwa.com\/subscribe?damhwabox=basic"
 },
 {
  "class": "샐러드 정기 배송",
  "name": "프레시코드",
  "price": "x",
  "img": "freshcode",
  "link": "https:\/\/freshcode.me\/subscription\/index.html"
 },
 {
  "class": "와인 정기 배송",
  "name": "퍼플독",
  "price": 39000,
  "img": "purpledog",
  "link": "https:\/\/www.purpledog.co.kr\/subscriptionGuide?tab=01"
 },
 {
  "class": "원두 정기 배송",
  "name": "원두데일리",
  "price": "x",
  "img": "onedodaily",
  "link": "https:\/\/www.onedodaily.kr\/"
 },
 {
  "class": "점심 정기 배송",
  "name": "위잇딜라이트",
  "price": 6900,
  "img": "weeatdelight",
  "link": "https:\/\/delight.weeat.kr\/signin"
 },
 {
  "class": "원두 정기 배송",
  "name": "빈브라더스",
  "price": "x",
  "img": "beanbrothers",
  "link": "https:\/\/beanbrothers.co.kr\/goods\/goods_list.php?cateCd=001"
 },
 {
  "class": "제주 특산품 정기 배송",
  "name": "아일랜드박스",
  "price": "x",
  "img": "iboxjeju",
  "link": "https:\/\/www.iboxjeju.com\/products#annual-product-section"
 },
 {
  "class": "비건 베이커링 정기 배송",
  "name": "더브레드블루",
  "price": 70000,
  "img": "thebreadblue",
  "link": "https:\/\/thebreadblue.com\/product\/%EB%8D%94%EB%B8%8C%EB%A0%88%EB%93%9C%EB%B8%94%EB%A3%A8-%EC%A0%95%EA%B8%B0%EB%B0%B0%EC%86%A1\/83\/category\/27\/display\/1\/"
 },
 {
  "class": "막걸리 정기 배송",
  "name": "홈술닷컴",
  "price": "x",
  "img": "homesool",
  "link": "https:\/\/homesool.com\/goods\/hs_subscribe.php"
 },
 {
  "class": "반찬 정기 배송",
  "name": "그리팅몰",
  "price": 40000,
  "img": "greating",
  "link": "https:\/\/www.greating.co.kr\/market\/marketList?ctgryId=3279#page1"
 },
 {
  "class": "전통차 정기 배송",
  "name": "다다일상",
  "price": 24900,
  "img": "dada",
  "link": "https:\/\/www.osulloc.com\/kr\/ko\/dlytea\/dada\/homecafe"
 },
 {
  "class": "유제품, 샐러드 정기 배송",
  "name": "프레딧",
  "price": "x",
  "img": "fredit",
  "link": "https:\/\/m.fredit.co.kr\/exhibition\/fredit\/event-fredit-main-detail?bbmId=1000008955"
 },
 {
  "class": "과자 정기 구독",
  "name": "롯데웰푸드 월간과자",
  "price": 9900,
  "img": "lottesweetmall",
  "link": "https:\/\/lottesweetmall.com\/product\/detail_subscribe.html?product_no=499"
 }
 ],
};
function App() {
  return (
    <ChakraProvider>
		  <Router>
			  <Nav/>
			  <Routes>
				  <Route exact path='/' element={<Main />} />
				  <Route path='/book' element={<Book list={itemData.book}/>} />
				  <Route path='/food' element={<Food list={itemData.food}/>} />
				  <Route path='/life' element={<Life list={itemData.life}/>} />
				  <Route path='/ott' element={<Ott list={itemData.ott}/>} />
				  <Route path='/others' element={<Others list={itemData.others}/>} />
			  </Routes>
		  </Router>
		  <Footer/>
	</ChakraProvider>
  );
}

export default App;
