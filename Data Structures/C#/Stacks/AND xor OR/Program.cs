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

        foreach (int num in a)
        {
            while (stack.Count > 0)
            {
                int top = stack.Peek();
                int currValue = ReturnCurrValue(num, top);
                maxValue = Math.Max(maxValue, currValue);

                if (num < top)
                    stack.Pop();
                else
                    break;
            }

            stack.Push(num);
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
