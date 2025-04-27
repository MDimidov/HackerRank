// Условие:
// Задача 1: Брояч на думи
//Напиши програма, която:
//    Чете низ от текст (един ред).
//    Преброява и отпечатва колко думи има в този текст.
//    (Дума е всяка последователност от символи, разделени от интервали.)

//int reult = Console.ReadLine()!
//    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//    .Count();

//Console.WriteLine(reult);

//Задача 2: Проверка за палиндром
//Напиши програма, която:
//    Чете един низ от входа.
//    Проверява дали той е палиндром (чете се еднакво отляво надясно и отдясно наляво).
//    Игнорира главни и малки букви.

//string input = Console.ReadLine()!.ToLower();
//var reversed = string.Concat(input.Reverse());

//if(input == reversed)
//{
//    Console.WriteLine("Yes");
//}
//else
//{
//    Console.WriteLine("No");
//}


//Задача 3: Сума на редове в двумерен масив
//Напиши програма, която:
//    Чете двумерен масив от цели числа (int) с размер n x m.
//    След това отпечатва сумата на всеки ред на отделен ред.

int[] inputs = Console.ReadLine()!
    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
    .Select(int.Parse)
    .ToArray();

int[] resultArr = new int[inputs[0]];

int[] row = new int[inputs[1]];
for (int i = 0; i < inputs[0]; i++)
{
    row = Console.ReadLine()!
        .Split(" ", StringSplitOptions.RemoveEmptyEntries)
        .Select(int.Parse)
        .ToArray();

    resultArr[i] = row.Sum();
}

Console.WriteLine(string.Join(Environment.NewLine, resultArr));