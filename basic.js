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

console.log(
    isAccessAdminPage ? "관리자 페이지에 접근하실수 있습니다." : "관리자 페이지에 접근하실수 없습니다."
)


// 로그인 된 사용자 "이거나" 롤이 admin인 사용자면 true
const isAccessUserPage = user.isLoggedIn || user.role === "user"
console.log("🚀 ~ isAccessUserPage:", isAccessUserPage)

const double = (num = 1) => {
    console.log("🚀 ~ num:", num);
    return num * 2;
}

console.log("double1:", double());
console.log("double1:", double(2));

// Todo: 삼항 연산자
// score값이 60점 이상이면 "합격", 60점 미만이면 "탈락"
const score = 60;
const result = score >= 60 ? "합격" : "탈락";
console.log("🚀 ~ result:", result)

// Todo: spread syntex
// 배열이나 객체를 개별요소로 분해하거나 결합할때 사용되는 문법
console.log("animals", animals);
const copyArr = [...animals, "value"];
console.log("🚀 ~ animals:", animals);
console.log("🚀 ~ copyArr:", copyArr);

const todoItem = {
    id: 1,
    content: "React공부하기",
};

const newItem = {
    ...todoItem,
    isComplete: false, // 기존에 존재하지 않는 키값: 추가
    content: "MongoDB 공부하기" // 기존에 존재하는 키값: 수정
};

console.log("🚀 ~ todoItem:", todoItem);
console.log("🚀 ~ newItem:", newItem);

// Todo: javascript 에서 false 로 간주
// 숫자 0
// string ""
// null
// undefined
