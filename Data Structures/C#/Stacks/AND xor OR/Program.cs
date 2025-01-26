using System.Linq;
using System.Reflection.Metadata.Ecma335;

class Result
{

    /*
     * Complete the 'andXorOr' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY a as parameter.
     */

    public static int andXorOr(List<int> a)
    {
        int maxValue = int.MinValue;
        Stack<int> stack = new Stack<int>();

        for (int i = 0; i < a.Count - 1; i++)
        {
            int currValue = ReturnCurrValue(a[i], a[i + 1]);
            maxValue = Math.Max(maxValue, currValue);

            Range range = new(i, a.Count);
            List<int> minValues = new
                (a
                .Take(range)
                .OrderBy(n => n)
                .Take(2));

            stack.Push(minValues[1]);
            stack.Push(minValues[0]);
        }

        for (int i = a.Count - 1; i > 1; i--)
        {
            Range range = new(0, i + 1);
            List<int> minValues = new
                (a
                .Take(range)
                .OrderBy(n => n)
                .Take(2));

            stack.Push(minValues[1]);
            stack.Push(minValues[0]);
        }

        while(stack.Count > 0)
        {
            int num1 = stack.Pop();
            int num2 = stack.Pop();

            maxValue = Math.Max(maxValue, ReturnCurrValue(num1, num2));
        }

        return maxValue;
    }

    public static int ReturnCurrValue(int num1, int num2)
    {
        int bitwiseAND = num1 & num2;
        int bitwiseOR = num1 | num2;
        int firstXOR = bitwiseAND ^ bitwiseOR;
        int secondXOR = num1 ^ num2;
        int currValue = firstXOR & secondXOR;

        return currValue;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int aCount = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> a = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(aTemp => Convert.ToInt32(aTemp)).ToList();

        int result = Result.andXorOr(a);

        Console.WriteLine(result);

        //textWriter.Flush();
        //textWriter.Close();
    }
}
