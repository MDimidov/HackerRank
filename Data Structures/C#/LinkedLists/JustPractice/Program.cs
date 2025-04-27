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

//int[] inputs = Console.ReadLine()!
//    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//    .Select(int.Parse)
//    .ToArray();

//int[] resultArr = new int[inputs[0]];

//int[] row = new int[inputs[1]];
//for (int i = 0; i < inputs[0]; i++)
//{
//    row = Console.ReadLine()!
//        .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//        .Select(int.Parse)
//        .ToArray();

//    resultArr[i] = row.Sum();
//}

//Console.WriteLine(string.Join(Environment.NewLine, resultArr));


//Задача 4: Намиране на най-голям елемент в двумерен масив
//Напиши програма, която:
//    Чете двумерен масив от цели числа (int) с размер n x m.
//    Открива най-големия елемент в целия масив и отпечатва неговата стойност.

//int[] inputs = Console.ReadLine()!
//    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//    .Select(int.Parse)
//    .ToArray();

//int maxValue = int.MinValue;

//for (int i = 0; i < inputs[0]; i++)
//{
//    int[] row = Console.ReadLine()!
//            .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//            .Select(int.Parse)
//            .ToArray();

//    for (int j = 0; row.Length > j; j++)
//    {
//        if (row[j] > maxValue)
//        {
//            maxValue = row[j];
//        }
//    }
//}

//Console.WriteLine(maxValue);


//Задача 5: Транспониране на матрица
//Напиши програма, която:
//    Чете двумерен масив n x m.
//    Транспонира матрицата — разменя редове и колони.
//    Извежда транспонираната матрица.

int[] inputs = Console.ReadLine()!
    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
    .Select(int.Parse)
    .ToArray();

int[,] arr = new int[inputs[0], inputs[1]];

fillArrFromConsole(arr, inputs);
int[,] resultArr = transposeArr(arr);
printArr(resultArr);

void fillArrFromConsole(int[,] arr, int[] inputs)
{
    for (int i = 0; i < inputs[0]; i++)
    {
        int[] row = Console.ReadLine()!
            .Split(" ", StringSplitOptions.RemoveEmptyEntries)
            .Select(int.Parse)
            .ToArray();

        for (int j = 0; j < row.Length; j++)
        {
            arr[i, j] = row[j];
        }
    }
}

int[,] transposeArr(int[,] arr)
{
    int[,] transposedArr = new int[arr.GetLength(1), arr.GetLength(0)];

    for (int i = 0; i < arr.GetLength(0); i++)
    {
        for (int j = 0; j < arr.GetLength(1); j++)
        {
            transposedArr[j, i] = arr[i, j];
        }
    }

    return transposedArr;
}

void printArr(int[,] array)
{
    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; j < array.GetLength(1); j++)
        {
            if (j != 0)
            {
                Console.Write(' ');
            }
            Console.Write(array[i, j]);
        }

        Console.WriteLine();
    }
}