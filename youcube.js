class Blog {
  constructor(body, date) {
    this.body = body;
    this.date = date;
  }
}

let blog = [new Blog("Получила новый  кубик. Это настоящая жемчужина.", "04/14/2022"),
new Blog("Сложила новый кубик, но, сейчас мне скучно и уже собираюсь покупать новый.", "04/19/2022"),
new Blog("Пришлось поломать голову над новым кубиком. А не пора ли вздремнуть?", "04/16/2022"),
new Blog("Нашла кубик 7x7x7 в интернет-магазине. Ура! Возможно он станет лучшим.", "04/21/2022"),
new Blog("Встретилась с товарищами по кубу, чтобы обсудить перспективы куба 7x7x7. Смешанные чувства.", "05/19/2022")];

console.log(blog[0].date < blog[1].date);


// Bubble Sorting 
function bubbleSort(arr, n) {
  if (n === 1) return;

  for (let i = 0; i < n - 1; i += 1) {
    if (arr[i].date > arr[i + 1].date){
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp;
    }
  }
  bubbleSort(arr, n - 1);
}

function showBlog(numEntries) {
  bubbleSort(blog, blog.length);

  // При необходимости редактируем количество записей для показа всего блога
  if (!numEntries)
    numEntries = blog.length;

  // Показать записи блога
  let i = 0, blogText = "";
  while (i < blog.length && i < numEntries) {

    // Используем серый фон для чётных записей блога
    if (i % 2 == 0)
      blogText += "<p style='background-color:#EEEEEE'>";
    else
      blogText += "<p>";

    // Генерируем и форматируем HTML код блога
    blogText += "<strong>" +
      blog[i].date + "</strong><br>" +
      blog[i].body + "</p>";
    i++;
  }

  // Располагаем HTML-код блога на странице
  document.getElementById("blog").innerHTML = blogText;
}