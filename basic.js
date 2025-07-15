// 자바스크립트 기초

// 배열
const dayOfWeeks = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

console.log(dayOfWeeks[dayOfWeeks.length - 1]); // 마지막 데이터 가져오기


const animals = ["cat", "dog", "pig"];

// map: 조작할 내용 리턴 (배열 리턴)
const newAnimals = animals.map((item, index, array) => {
    //console.log("🚀 ~ newAnimals ~ array:", array)
    //console.log("🚀 item:", item)
    //console.log("🚀 ~ newAnimals ~ index:", index)
    return item;
});
console.log("🚀 ~ newAnimals:", newAnimals);

// filter: 조작할 내용 리턴 (배열 리턴)
const filteredAnimals = animals.filter((item) => item.startsWith("c"));
console.log("🚀 ~ filteredAnimals:", filteredAnimals);

// find: 조건식 작성(요소 or Undefined)
const findAnimal = animals.find((item) => item.length === 3);
console.log("🚀 ~ findAnimal:", findAnimal);

// some/every: 조건식 작성(boolean 리턴)
const someAnimal = animals.some((item) => item.endsWith("g"));
console.log("🚀 ~ someAnimal:", someAnimal);

const everyAnimal = animals.every((item) => item.endsWith("g"));
console.log("🚀 ~ everyAnimal:", everyAnimal);

console.log("원본배열: ", animals);


// logical operators

const user = {
    isLoggedIn: true, // 로그인 여부
    role: "user" // "user", "guest" 유저의 역할
};

// admin 페이지에 접근할수 있는지 여부
const isAccessAdminPage = user.isLoggedIn && user.role === "admin"
console.log("🚀 ~ isAccessAdminPage:", isAccessAdminPage)

if (isAccessAdminPage) {
    console.log("관리자 페이지에 접근하실수 있습니다.");
}
else {
    console.log("관리자 페이지에 접근하실수 없습니다.");
}

// 로그인 된 사용자 "이거나" 롤이 admin인 사용자면 true
const isAccessUserPage = user.isLoggedIn || user.role === "user"
console.log("🚀 ~ isAccessUserPage:", isAccessUserPage)

const double = (num = 1) => {
    console.log("🚀 ~ num:", num);
    return num * 2;
}

console.log("double1:", double());
console.log("double1:", double(2));