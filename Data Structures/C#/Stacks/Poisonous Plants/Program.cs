class Result
{

    /*
     * Complete the 'poisonousPlants' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY p as parameter.
     */

    public static int poisonousPlants(List<int> p)
    {
        int n = p.Count;
        int[] days = new int[n];
        Stack<int> stack = new Stack<int>();
        int maxDays = 0;

        for (int i = 0; i < n; i++)
        {
            int day = 0;

            while (stack.Count > 0 && p[stack.Peek()] >= p[i])
            {
                day = Math.Max(day, days[stack.Pop()]);
            }

            if (stack.Count > 0)
            {
                days[i] = day + 1;
            }

            stack.Push(i);
            maxDays = Math.Max(maxDays, days[i]);
        }

        return maxDays;
    }


}

class Solution
{
    public static void Main(string[] args)
    {
        //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine().Trim());

        List<int> p = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(pTemp => Convert.ToInt32(pTemp)).ToList();

        int result = Result.poisonousPlants(p);

        Console.WriteLine(result);

        //textWriter.Flush();
        //textWriter.Close();
    }
}
