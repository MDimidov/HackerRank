using System.Text;

StringBuilder sb = new();

int num = int.Parse(Console.ReadLine()!);
Stack<string[]> lastCommands = new();

for (int i = 0; i < num; i++)
{
    string input = Console.ReadLine()!;
    string[] commands = input.Split(new char[] { ' ' }).ToArray();


    StringBuilder removed = new();
    switch (commands[0])
    {
        case "1":
            sb.Append(commands[1]);
            break;
        case "2":
            int toRemove = int.Parse(commands[1]);
            for (int j = sb.Length - toRemove; j < sb.Length; j++)
            {
                removed.Append(sb[j]);
            }
            sb.Remove(sb.Length - toRemove, toRemove);
            break;
        case "3":
            int index = int.Parse(commands[1]) - 1;
            Console.WriteLine(sb[index]);
            break;
        case "4":
            string[] commandToRemove = lastCommands.Pop();
            if (commandToRemove[0] == "1")
            {
                toRemove = commandToRemove[1].Length;
                sb.Remove(sb.Length - toRemove, toRemove);
            }
            else
            {
                sb.Append(commandToRemove[1]);
            }
            break;
    }

    if (commands[0] == "1")
    {
        string[] arr = new string[2];
        arr[0] = commands[0];
        arr[1] = commands[1];

        lastCommands.Push(arr);
    }
    else if (commands[0] == "2")
    {
        string[] arr = new string[2];
        arr[0] = commands[0];
        arr[1] = removed.ToString();
        removed.Clear();
        lastCommands.Push(arr);
    }
}