class Result
{

    /*
     * Complete the 'equalStacks' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. INTEGER_ARRAY h1
     *  2. INTEGER_ARRAY h2
     *  3. INTEGER_ARRAY h3
     */

    public static int equalStacks(List<int> h1, List<int> h2, List<int> h3)
    {
        bool isEquals = false;
        while (!isEquals)
        {
            int stack1 = h1.Sum();
            int stack2 = h2.Sum();
            int stack3 = h3.Sum();

            if (stack1 > stack2 || stack1 > stack3)
            {
                h1.RemoveAt(0);
            }
            if (stack2 > stack3 || stack2 > stack1)
            {
                h2.RemoveAt(0);
            }
            if (stack3 > stack2 || stack3 > stack1)
            {
                h3.RemoveAt(0);
            }

            if (stack1 == stack2 && stack2 == stack3)
            {
                isEquals = true;
            }
        }

        return h1.Sum();
    }

    class Solution
    {
        public static void Main(string[] args)
        {
            //TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

            string[] firstMultipleInput = Console.ReadLine().TrimEnd().Split(' ');

            int n1 = Convert.ToInt32(firstMultipleInput[0]);

            int n2 = Convert.ToInt32(firstMultipleInput[1]);

            int n3 = Convert.ToInt32(firstMultipleInput[2]);

            List<int> h1 = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(h1Temp => Convert.ToInt32(h1Temp)).ToList();

            List<int> h2 = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(h2Temp => Convert.ToInt32(h2Temp)).ToList();

            List<int> h3 = Console.ReadLine().TrimEnd().Split(' ').ToList().Select(h3Temp => Convert.ToInt32(h3Temp)).ToList();

            int result = Result.equalStacks(h1, h2, h3);

            Console.WriteLine(result);

            //textWriter.Flush();
            //textWriter.Close();
        }
    }
}
