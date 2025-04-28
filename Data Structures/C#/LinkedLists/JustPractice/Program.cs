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
//for (int row = 0; row < inputs[0]; row++)
//{
//    row = Console.ReadLine()!
//        .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//        .Select(int.Parse)
//        .ToArray();

//    resultArr[row] = row.Sum();
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

//for (int row = 0; row < inputs[0]; row++)
//{
//    int[] row = Console.ReadLine()!
//            .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//            .Select(int.Parse)
//            .ToArray();

//    for (int col = 0; row.Length > col; col++)
//    {
//        if (row[col] > maxValue)
//        {
//            maxValue = row[col];
//        }
//    }
//}

//Console.WriteLine(maxValue);


//Задача 5: Транспониране на матрица
//Напиши програма, която:
//    Чете двумерен масив n x m.
//    Транспонира матрицата — разменя редове и колони.
//    Извежда транспонираната матрица.

//int[] inputs = Console.ReadLine()!
//    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//    .Select(int.Parse)
//    .ToArray();

//int[,] arr = new int[inputs[0], inputs[1]];

//fillArrFromConsole(arr, inputs);
//int[,] resultArr = transposeArr(arr);
//printArr(resultArr);

//void fillArrFromConsole(int[,] arr, int[] inputs)
//{
//    for (int row = 0; row < inputs[0]; row++)
//    {
//        int[] row = Console.ReadLine()!
//            .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//            .Select(int.Parse)
//            .ToArray();

//        for (int col = 0; col < row.Length; col++)
//        {
//            arr[row, col] = row[col];
//        }
//    }
//}

//int[,] transposeArr(int[,] arr)
//{
//    int[,] transposedArr = new int[arr.GetLength(1), arr.GetLength(0)];

//    for (int row = 0; row < arr.GetLength(0); row++)
//    {
//        for (int col = 0; col < arr.GetLength(1); col++)
//        {
//            transposedArr[col, row] = arr[row, col];
//        }
//    }

//    return transposedArr;
//}

//void printArr(int[,] array)
//{
//    for (int row = 0; row < array.GetLength(0); row++)
//    {
//        for (int col = 0; col < array.GetLength(1); col++)
//        {
//            if (col != 0)
//            {
//                Console.Write(' ');
//            }
//            Console.Write(array[row, col]);
//        }

//        Console.WriteLine();
//    }
//}



//Задача 6: Намиране на диагоналната сума
//Напиши програма, която:
//    Чете квадратна матрица (n x n).
//    Изчислява:
//        Сумата на главния диагонал (от ляво-горе към дясно-долу)
//        Сумата на второстепенния диагонал (от дясно-горе към ляво-долу).


//int n = int.Parse(Console.ReadLine()!);

//int[,] arr = new int[n, n];

//fillArrayFromConsole(arr, n);
//List<int> leftDiagonal = getLeftDiagonal(arr);
//List<int> rightDiagonal = getRightDiagonal(arr);
//printResult(leftDiagonal, rightDiagonal);


//List<int> getLeftDiagonal(int[,] array)
//{
//    List<int> leftDiagonal = new();

//    for (int row = 0; row < array.GetLength(0); row++)
//    {
//        leftDiagonal.Add(array[row, row]);
//    }

//    return leftDiagonal;
//}

//List<int> getRightDiagonal(int[,] array)
//{
//    List<int> rightDiagonal = new();
//    int n = arr.GetLength(0);
//    for (int row = 0; row < n; row++)
//    {
//        rightDiagonal.Add(array[row, n - 1 - row]);
//    }

//    return rightDiagonal;
//}

//void fillArrayFromConsole(int[,] array, int n)
//{
//    for (int row = 0; row < array.GetLength(0); row++)
//    {
//        int[] row = Console.ReadLine()!
//            .Split(" ", StringSplitOptions.RemoveEmptyEntries)
//            .Select(int.Parse)
//            .ToArray();

//        for (int col = 0; col < row.Length; col++)
//        {
//            array[row, col] = row[col];
//        }
//    }
//}

//void printResult(List<int> leftDiagonal, List<int> rightDiagonal)
//{
//    Console.Write("Главен диагонал сума: ");
//    Console.WriteLine(string.Join(" + ", leftDiagonal) + " = " + leftDiagonal.Sum());

//    Console.Write("Второстепенен диагонал сума: ");
//    Console.WriteLine(string.Join(" + ", rightDiagonal) + " = " + rightDiagonal.Sum());
//}



//Задача 7: Намиране на най - голямата сума на подматрица 2x2
//Напиши програма, която:
//    Чете двумерен масив (n x m) от цели числа.
//    Открива подматрицата 2x2 с най-голяма сума на елементите.
//    Отпечатва:
//        Самата подматрица(4 числа — както изглежда в матрицата)
//        И сумата ѝ.

int[] inputs = Console.ReadLine()!
    .Split(" ", StringSplitOptions.RemoveEmptyEntries)
    .Select(int.Parse)
    .ToArray();

int n = inputs[0];
int m = inputs[1];

int[,] arr = new int[n, m];

fillArrFromConsole(arr, n);
int[,] subArr = getMaxSubArray(arr);
printArrWithSum(subArr);





void fillArrFromConsole(int[,] arr, int n)
{
    for (int i = 0; i < n; i++)
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

bool isIndexesValid(int row, int col, int maxRowIndex, int maxColIndex)
{
    if (row + 1 < maxRowIndex && row - 1 >= 0 &&
        col + 1 < maxColIndex && col - 1 >= 0)
    {
        return true;
    }

    return false;
}

int[,] getMaxSubArray(int[,] array)
{
    int[,] subArr = new int[2, 2];
    int maxSum = int.MinValue;

    for (int i = 0; i < array.GetLength(0); i++)
    {
        for (int j = 0; (j < array.GetLength(1)); j++)
        {
            if (isIndexesValid(i, j, array.GetLength(0), array.GetLength(1)))
            {
                int sum = sumSubArray(array, i, j);
                if (sum > maxSum)
                {
                    maxSum = sum;
                    subArr = getSubArray(array, i, j);
                }
            }
        }
    }

    return subArr;
}

int sumSubArray(int[,] array, int row, int col)
    => array[row, col]
        + array[row, col + 1]
        + array[row + 1, col]
        + array[row + 1, col + 1];

int[,] getSubArray(int[,] array, int row, int col)
{
    int[,] subArr = new int[2, 2];
    subArr[0, 0] = array[row, col];
    subArr[0, 1] = array[row, col + 1];
    subArr[1, 0] = array[row + 1, col];
    subArr[1, 1] = array[row + 1, col + 1];

    return subArr;
}

void printArrWithSum(int[,] array)
{
    int sum = 0;
    for (int row = 0; row < array.GetLength(0); row++)
    {
        for (int col = 0; col < array.GetLength(1); col++)
        {
            if (col != 0)
            {
                Console.Write(' ');
            }
            Console.Write(array[row, col]);
            sum += array[row, col];
        }
        Console.WriteLine();

    }

    Console.WriteLine("Sum = " + sum);
}