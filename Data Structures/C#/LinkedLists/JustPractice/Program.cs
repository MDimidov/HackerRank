// Условие:
// Задача 1: Брояч на думи
//Напиши програма, която:
//    Чете низ от текст (един ред).
//    Преброява и отпечатва колко думи има в този текст.
//    (Дума е всяка последователност от символи, разделени от интервали.)

int reult = Console.ReadLine()!
    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
    .Count();

Console.WriteLine(reult);