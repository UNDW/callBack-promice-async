/**
//  * Глобальная вероятность успеха для удобства тестирования
  */
const GLOBAL_PROPABILITY = 1;
const BAD_JSON_PROPABILITY = 0;

export function all() {
  return TimeoutPropabiliry(
    300,
    GLOBAL_PROPABILITY,
    () => serverAnswer(articlesStorage),
    () => serverAnswer("", 100500, "Propability Error")
  );
}
/**
 * Получить статью по id
 * @param {int} id Id статьи
 */
export function get(id) {
  return TimeoutPropabiliry(
    300,
    GLOBAL_PROPABILITY,
    () => serverAnswer(articlesStorage[mapArticles[id]]),
    () => serverAnswer("", 100500, "Propability Error")
  );
}

/**
 * Удалить статью из базы
 * @param {int} id Id статьи
 */
export function remove(id) {
  return TimeoutPropabiliry(
    300,
    GLOBAL_PROPABILITY,
    () => {
      if (id in mapArticles) {
        let num = mapArticles[id];
        delete mapArticles[id];
        articlesStorage.splice(num, 1);
        return serverAnswer(true);
      } else {
        return serverAnswer(false);
      }
    },
    () => serverAnswer("", 100500, "Propability Error")
  );
}

function TimeoutPropabiliry(time, probability, onSuccess, onError) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      Math.random() < probability ? resolve(onSuccess()) : reject(onError());
    }, time);
  });
}

function serverAnswer(data, code = 200, status = "OK") {
  if (Math.random() < BAD_JSON_PROPABILITY) {
    return "incoorect json";
  }

  return JSON.stringify({
    code,
    status,
    data
  });
}

/*  приватная часть */

let articlesStorage = [
  {
    id: 1,
    title: "Профисификация кода",
    dt: "2018-12-06",
    text:
      "Код без промисов бывает жестью, но и с ними можно изобразить много странного."
  },
  {
    id: 2,
    title: "Итераторы и генераторы",
    dt: "2018-12-01",
    text: "Сначала пугают всех, кто к ним прикасается, а Symbol кажется бредом."
  },
  {
    id: 3,
    title: "Javascript",
    dt: "2018-12-02",
    text: "Всё равно хороший язык программирования."
  }
];

let mapArticles = {};

articlesStorage.forEach((item, i) => {
  mapArticles[item.id] = i;
});
