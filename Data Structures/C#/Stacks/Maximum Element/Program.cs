using System.ComponentModel;

class Result
{

    /*
     * Complete the 'getMax' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts STRING_ARRAY operations as parameter.
     */

    public static List<int> getMax(List<string> operations)
    {
        List<int> result = new List<int>();
        Stack<int> stack = new Stack<int>();
        Stack<int> maxNums = new Stack<int>();

        foreach (string operation in operations)
        {
            switch (operation[0])
            {
                case '1':
                    int num = int.Parse(operation.Split(' ')[1]);
                    stack.Push(num);

                    if (maxNums.Count == 0 || num >= maxNums.Peek())
                    {
                        maxNums.Push(num);
                    }
                    break;

                case '2':
                    if (stack.Count > 0)
                    {
                        if (stack.Peek() == maxNums.Peek())
                        {
                            maxNums.Pop();
                        }
                        stack.Pop();
                    }
                    break;

                case '3':
                    if (maxNums.Count > 0)
                    {
                        result.Add(maxNums.Peek());
                    }
                    break;
            }
        }

        return result;
    }

    //public static int GetMaxElement(Stack<int> stack)
    //{
    //    int maxNum = int.MinValue;

    //    foreach (int element in stack)
    //    {
    //        if (element > maxNum)
    //        {
    //            maxNum = element;
    //        }
    //    }

    //    return maxNum;
    //}

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<string> ops = new List<string>();

        for (int i = 0; i < n; i++)
        {
            string opsItem = Console.ReadLine();
            ops.Add(opsItem);
        }

        List<int> res = Result.getMax(ops);

        Console.WriteLine(String.Join("\n", res));

        //textWriter.Flush();
        //textWriter.Close();
    }
}
