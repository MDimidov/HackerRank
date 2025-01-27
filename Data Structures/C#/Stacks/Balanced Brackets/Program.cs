class Result
{

    /*
     * Complete the 'isBalanced' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts STRING s as parameter.
     */

    public static string isBalanced(string s)
    {
        Dictionary<char, char> compareList = new()
        {
            { '{', '}' },
            { '[', ']' },
            { '(', ')' }
        };

        Stack<char> stack = new Stack<char>();

        foreach (char c in s)
        {
            if (stack.Count != 0 && compareList.ContainsKey(stack.Peek()) && compareList[stack.Peek()] == c)
            {
                stack.Pop();
            }
            else
            {
                stack.Push(c);
            }
        }

        if (stack.Count != 0)
        {
            return "NO";
        }
        else
        {
            return "YES";
        }
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int t = Convert.ToInt32(Console.ReadLine().Trim());

        for (int tItr = 0; tItr < t; tItr++)
        {
            string s = Console.ReadLine();

            string result = Result.isBalanced(s);

            Console.WriteLine(result);
        }

        //textWriter.Flush();
        //textWriter.Close();
    }
}
