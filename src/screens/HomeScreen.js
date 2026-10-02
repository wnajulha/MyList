import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Header from '../components/Header';
import AddTask from '../components/AddTask';
import TaskSectionHeader from '../components/TaskSectionHeader';
import TaskItem from '../components/TaskItem';

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Estudar React Native', completed: false },
    { id: 2, title: 'Fazer trabalho da faculdade', completed: false },
    { id: 3, title: 'Treinar', completed: false },
    { id: 4, title: 'Ler a Bíblia', completed: false },
    { id: 5, title: 'Organizar semana', completed: false },
    { id: 6, title: 'Comprar material', completed: true },
    { id: 7, title: 'Enviar atividade', completed: true },
  ]);

  const addTask = (title) => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const createdTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <AddTask onAddTask={addTask} />

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TaskSectionHeader
          title="Criadas"
          count={createdTasks.length}
        />

        {createdTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
          />
        ))}

        <TaskSectionHeader
          title="Concluídas"
          count={completedTasks.length}
        />

        {completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
  },

  content: {
    flex: 1,
    paddingHorizontal: 50,
  },
});